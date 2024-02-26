//importing router and user model
const router = require("express").Router();
const { Comment, User, Blog } = require("../../models");
const withAuth = require("../../utils/auth");

//GET route with withAuth middleware to make sure to allow users to make a comment during logged in
router.get("/:id", withAuth, async (req, res) => {
  try {
    //retrieving datas from Blog model with matching id, as well as comment and user models
    const blog = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    if (!blog) {
      res.status(404).json({ message: "Blog post not found" });
      return;
    }
    //sending the data to comment handlebars
    const blogData = blog.get({ plain: true });
    res.render("comment", { blogData, logged_in: req.session.logged_in, pageTitle: "My blog"});
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET route to render all the blog details and redirect the user to allow them make a comment 
 router.get("/create/:id", withAuth, async (req, res) => {
  try {
    //retrieving datas from Blog model with matching id, as well as comment and user models
    const blog = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    if (!blog) {
      res.status(404).json({ message: "Blog post not found" });
      return;
    }
    //sending the data to comment handlebars
    const blogData = blog.get({ plain: true });
    res.render("comment", { blogData, logged_in: req.session.logged_in, pageTitle: "My blog", comment: true });
  } catch (err) {
    res.status(500).json(err);
  }
 });

//POST route with withAuth middleware
router.post("/:id", withAuth, async (req, res) => {
  try {
    //when creating a comment, include user_id and blog_id
    await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      blog_id: req.params.id,
    });
    res.redirect(`/comment/${req.params.id}`);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
