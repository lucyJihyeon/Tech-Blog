const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("blog", {
    logged_in: req.session.logged_in,
    pageTitle: "Your Dashboard",
  });
});

//post route to create a new post
router.post("/", withAuth, async (req, res) => {
  try {
    await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    //redirect the user to render the updated data
    res.redirect("/api/dashboard");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    //retireve the blog post made with the parameter id
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      res.status(404).json({ message: "Blog post not found" });
      return;
    }
    const blogPost = blog.get({ plain: true });
    let isEdit = true;
    blogPost.edit = isEdit;
    console.log(blogPost);
    res.render("blog", { blogPost, pageTitle: "Edit my Blog"});
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    //retireve the blog post made with the parameter id
    const blogPost = await Blog.findByPk(req.params.id);
    if (!blogPost) {
      res.status(404).json({ message: "No blog post to edit!" });
      return;
    }
    //if the user has filled out the necessary fields, update the data
    if (req.body.title && req.body.description) {
      blogPost.title = req.body.title;
      blogPost.description = req.body.description;
      blogPost.edit = false;
    }
    await blogPost.save();

    // Send back a success response with URL for redirection
    res.json({
      success: true,
      redirectUrl: `/api/dashboard/${req.session.user_id}`,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
