console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
    try {
        //this is solution is works if notes-data file is created before, if not we have the error in console, so need to use try/catch
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
};

let saveNotes = (notes) => {
    //get array with object
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    //this is short form for fuction which return the not dublication files
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
        //after write in terminal node app.js app --title="Secret" --body="This is the body" the result will be:
        // It will be creating the new json file with name name-data.json and this file contate arrau with object like:
        // [{"title":"Secret","body":"This is the body"}]
    }
};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    console.log('Getting the title', title);
};

let removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

