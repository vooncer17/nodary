const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Set up the database
require('dotenv').config();
require('./config/database')

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// API Routes here, before the "Catch all route"
app.use('/api/users', require('./routes/api/users'));
app.use('/api/datafeeds', require('./routes/api/datafeeds'));
app.use('/api/allcoins', require('./routes/api/coins'))

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
})