const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const { notes } = require('./db/db.json');

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('./public'));

// Use apiRoutes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// Function created to filter by id, needed later for removal and re-writing of db.json
function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  if (query.id) {
    filteredResults = filteredResults.filter(results => results.id === query.id);
  }
  return filteredResults;
}

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


// POST /api/notes should receive a new note to save on the request body, add it to the `db.json` file
// Then return the new note to the client.
// Give each note a unique id when created. maybe: https://www.npmjs.com/package/uniqid?
app.post('/api/notes', (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});