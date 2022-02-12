// Use fs for file management and path for directing files
const fs = require("fs");
const path = require("path");

// Set up Express.js
const express = require("express");
const { formatWithOptions } = require("util"); //this was created by my computer, take out?
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

// Assign port
const PORT = process.env.PORT || 3001;

// Paths to routes
const apiRoutes = require('./routes/apiRoutes/index.js');
const htmlRoutes = require('./routes/htmlRoutes');

// Use apiRoutes
app.use('/api', apiRoutes);

// Use htmlRoutes
app.use('/', htmlRoutes);

// Message on console confirms displaying on selected port.
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});