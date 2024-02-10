const router = require("express").Router();
const { Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");

//an user sends a GET request
router.get("/", async (req, res) => {
  try {
    // Get all blog posts
    const blogtData = await Blog.findAll();
    // Serialize data so the template can read it
    const blogposts = blogtData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      blogposts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/comments/:id", withAuth, async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    const newcomment = comment.get({ plain: true });
    res.render('comment', { newcomment });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
