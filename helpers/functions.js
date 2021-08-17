const fs = require('fs');
const path = require('path');
// Function to create new note and count ID for each note
const createNote = (body, notesArray) => {
    const newNote = body;
    if (!Array.isArray(notesArray))
        notesArray = [];
    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray.length;
    notesArray[0]++;
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
};

// Function to delete notes if user decided to
const deleteNote = (id, notesArray) => {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];
        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, './db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );
            break;
        }
    }
};

module.exports = { createNote, deleteNote };