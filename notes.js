console.log('Starting notes.js');

let addNote = (title, body) => {
    console.log('Adding none', title, body);
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

