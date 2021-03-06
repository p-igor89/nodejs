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
    return fetchNotes();
};

let getNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => {
        return note.title === title;
    });
    return filterNotes[0];
};

let removeNote = (title) => {
    var notes = fetchNotes();
    //filter notes, removing the one with title of arguments
    var filterNotes = notes.filter((note) => note.title !== title);
    //save new notes in array
    saveNotes(filterNotes);

    return filterNotes.length !== notes.length;
};

var logNote = (note) => {
    debugger;
    console.log("----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
};

