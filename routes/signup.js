var express = require('express');
var router = express.Router();
const  User  = require('../models/User');
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

router.get('/signup', function(req, res, next) {
    res.render("signup");
  });

  router.post("/signup/submit", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      email,
      password: hashedPassword,
  });

    try {
      //saving user info to data base
      await user.save();
      res.redirect('/signin'); 
    } catch(err) {
      // If email already exists, send error message
      console.error("Error saving user:", err);
      // Check if the error is a duplicate key error (email already exists)
      if (err.code === 11000) {
        // Duplicate key error, which means email already exists
        console.error("Email already exists:", err);
        res.send("Email already exists. Please try a different one.");
      }else{
        res.status(500).send("Failed to save to db.")
      }
    }    
  });

  module.exports = router;