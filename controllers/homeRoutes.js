const router = require('express').Router();
const { Blog } = require('../models');

//an user sends a GET request 
router.get('/', async (req, res) => {
  try {
    // Get all blog posts
    const blogtData = await Blog.findAll();
    // Serialize data so the template can read it
    const blogposts = blogtData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogposts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
