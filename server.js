const express = require('express');
const path = require('path');
const dataBase = require('./db/db.json');
const { createNote, deleteNote } = require('./helpers/functions')

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// HTML routes
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// API routes for notes page
app.get('/api/notes', (req, res) => {
    res.json(dataBase.slice(1));
});

app.post('/api/notes', (req, res) => {
    const newNote = createNote(req.body, dataBase);
    res.json(newNote);
    createNote(req.body, dataBase);
});

app.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id, dataBase);
    res.json(true);
    deleteNote(id, notesArray);
});


// App listenening at http://localhost:3001
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);