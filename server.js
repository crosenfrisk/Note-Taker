// Use fs for file management and path for directing files
const fs = require('fs');
const path = require('path');

// Import existing notes from db/db.json 
const { notes } = require('./db/db.json');

// Use Uniqid npm to create ids for new notes
const uniqid = require('uniqid'); 

// Set up Express.js
const express = require('express');
const { formatWithOptions } = require('util'); //this was created by my computer, take out?
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// Assign port
const PORT = process.env.PORT || 3001;


// // ----- HTML Routes ----- //

// GET route '/' for landing page, returns index.html page.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// GET route '/notes', returns `notes.html` page.
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});


// ----- API Routes ----- //

// GET route '/api/notes' returns stored notes from JSON to the browser window
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// POST route to add a new user note
app.post('/api/notes', (req, res) => {
  // Get notes from body of request.
  let note = req.body;
  // Assign an id to the new note using uniqid npm.
  note.id = uniqid;
  // Add a note object to the note array.
  notes.push(note);
  // Update the json file to display all notes from db/db.json file / object array.
  fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify({ notes: notes}, null, 2));
  // Respond with note object that was added and display on page.
  res.json(note);
})

// GET '*' is a wildcard route that redirects all other get requests to the application's `index.html` landing page.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Message on console confirms displaying on selected port.
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});