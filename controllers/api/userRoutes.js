//importing router and user model
const router = require("express").Router();
const { User } = require("../../models");

//when an user sends a post request to the ending '/users'
router.post("/", async (req, res) => {
  try {
    //create a userData
    const userData = await User.create(req.body);

    //save the user id and login status in a session storage(cookie)
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//when a user sends a post request to the ending '/users/login'
router.post("/login", async (req, res) => {
  try {
    //check the user data that matches the user email
    const userData = await User.findOne({ where: { name: req.body.name } });

    //if the user name is not found in the data, send a response with a 400 status 
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect user name or password, please try again" });
      return;
    }
    //check if the password is valid 
    const validPassword = await userData.checkPassword(req.body.password);

    //if not valid, send s a response with a 400 status 
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect user name or password, please try again" });
      return;
    }

    //save the user id and log in status in the session storage(cookie)
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//when a user sends a post request to the ending 'users/logout'
router.post("/logout", (req, res) => {
  //check if the user's log in status is true or false
  if (req.session.logged_in) {
    //destroy the session data from the cookie 
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
