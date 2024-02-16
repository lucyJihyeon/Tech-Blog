const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/', withAuth, (req,res) => {
    console.log("router called");
    res.render('blog',{logged_in: req.session.logged_in, pageTitle: "Your Dashboard"})
});


module.exports = router;
