// Use fs for file management and path for directing files
const fs = require('fs');
const path = require('path');

// Import existing notes from db/db.json 
const { notes } = require('./db/db.json');

// Use Uniqid npm to create ids for new notes
const uniqid = require('uniqid'); 

// Set up Express.js
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// Assign port
const PORT = process.env.PORT || 3001;

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');



// Use apiRoutes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// Function created to filter by id, needed later for removal and re-writing of db.json
// function filterByQuery(query, notesArray) {
//   let filteredResults = notesArray;
//   if (query.id) {
//     filteredResults = filteredResults.filter(results => results.id === query.id);
//   }
//   return filteredResults;
// }

// HTML Routes

// GET /notes should return `notes.html` file.
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// GET /api/db returns results in JSON to the browser window
app.get('/api/db', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

// GET '*' is a wildcard route that redirects all other get requests to the application's `index.html` landing page.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// API Routes

// GET /api/notes reads `db.json` file and returns all saved notes as JSON
app.get('/api/notes', (req, res) => {
  let results = notes;
  res.json(results)
});


// POST /api/notes should receive a new note to save on the request BODY, add it to the `db.json` file
app.post('/api/notes', (req, res) => {
  let note = req.body;
  // Give each note a unique id when created using uniqid npm
  note.id = uniqid;
  // Add new note object to the `db.json` "notes" array
  notes.push(note);
  // Update the `db.json` file to include the new note
  fs.writeFileSync(path.join(__dirname, './db/db.json'), json.stringify({notes: notes}, null, 2));
  // Respond displaying added note object to page
  res.json(note);
  // Update console to confirm add:
  console.log('Your new note: ' + note + ' has been added');
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});