const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/', withAuth, (req,res) => {
    res.render('blog',{logged_in: req.session.logged_in, pageTitle: "Your Dashboard"})
});


//post route to create a new post
router.post("/", withAuth, async (req, res) => {
    try {
      await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      //redirect the user to render the updated data
      res.redirect('/api/dashboard');
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
module.exports = router;
