const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

// // // ----- HTML Routes ----- //

// GET route '/' for landing page, returns index.html page.
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// GET route '/notes', returns `notes.html` page.
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;
