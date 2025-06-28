var express = require('express');
var router = express.Router();
const  User  = require('../models/user');
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// Render the signin page
// This route serves the signin page when the user accesses /signin
// It uses the EJS template engine to render the "signin" view
router.get('/signin', function(req, res, next) {
    res.render("signin");
  });
;

router.post("/signin/submit", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if email and password are provided
    const user = await User.findOne({ email });

    // if user exists, compare the password
    // bcrypt.compare returns a promise, so we await it
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.loggedIn = true;
      req.session.user = user.name;
      req.session.email = user.email;
      res.redirect("/");
    } else {
      res.status(400).json({ error: "User doesn't exist or password doesn't match" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
  
});

module.exports = router;