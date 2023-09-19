const express = require('express');
const db = require('../config/db.config');

const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(result);
  });
});

// Get one user by email
router.get("/:email", (req, res) => {
  const email = req.params.email;
  db.query("SELECT * FROM users WHERE email = ?", email, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(result);
  });
});

module.exports = router;