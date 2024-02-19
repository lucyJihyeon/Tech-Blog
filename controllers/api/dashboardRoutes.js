//importing router and user model
const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

//get route to gather all the blogpost created with the current user_id
router.get("/", withAuth, async (req, res) => {
  try {
    const dashboard = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const blogData = dashboard.map((blog) => blog.get({ plain: true }));
    //render the data by passing it to dashboard.handlebars
    res.render("dashboard", {
      blogData,
      logged_in: req.session.logged_in,
      pageTitle: "Your Dashboard",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete route to delete the blogpost with the matching id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const blogData =
      //retreive the data with the maching id and user_id
      await Blog.destroy({
        where: {
          id: req.params.id,
        },
      });
    if (!blogData) {
      res.status(404).json({ message: "No Blog to delete!" });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// //post route to create a new post
// router.post("/", withAuth, async (req, res) => {
//   try {
//     await Blog.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
//     //redirect the user to render the updated data
//     res.redirect(`/dashboard/${req.session.user_id}`);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//put route to update the existing blog post
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
    }
    await blogPost.save();
    //then, render the updated data
    res.redirect(`/dashboard/${req.session.user_id}`);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

// //if the user has filled out the necessary fields, update the data
// if (req.body.title && req.body.description) {
//   blog.title = req.body.title;
//   blog.description = req.body.description;
// }
// await blog.save();