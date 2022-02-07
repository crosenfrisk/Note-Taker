const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const { notes } = require('./Develop/db/db.json');

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// // Use apiRoutes
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

//html routes
app.get('/api/db', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

//api routes

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

//adding to heroku