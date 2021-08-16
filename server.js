const express = require('express');
const fs = require('fs');
const dataBase = require('./db/db.json');
const path = require('path');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// HTML routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// API route for notes page
app.get('/api/notes', (req, res) => {
    res.json()
});

// App listenening at http://localhost:3001
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);