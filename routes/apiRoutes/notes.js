// ----- API Routes ----- //
// const fs = require("fs");
// const path = require("path");
// const express = require("express");
// const router = require("express").Router();

// // ----- API Routes ----- //

// // GET route '/api/notes' returns stored notes from JSON to the browser window
// router.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// // POST route to add a new user note
// router.post("/api/notes", (req, res) => {
//   // Get notes from body of request.
//   let note = req.body;

//   // Assign an id to the new note using uniqid npm.
//   note.id = uniqid;

//   // Add a note object to the note array.
//   notes.push(note);

//   // Update the json file to display all notes from db/db.json file / object array.
//   fs.writeFileSync(
//     path.join(__dirname, "./db/db.json"),
//     JSON.stringify({ notes: notes }, null, 2)
//   );

//   // Respond with note object that was added and display on page.
//   res.json(note);

//   // Update console to confirm add:
//   console.log("Your new note: " + note + " has been added!");
// });

// module.exports = router;
