// // ----- HTML Routes ----- //
// const fs = require('fs');
// const path = require('path');
// const express = require('express');
// const router = require('express').Router();

// // // ----- HTML Routes ----- //

// // GET route '/' for landing page, returns index.html page.
// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// // GET route '/notes', returns `notes.html` page.
// router.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/notes.html"));
// });

// // GET '*' is a wildcard route that redirects all other get requests to the application's `index.html` landing page.
// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// module.exports = router;
