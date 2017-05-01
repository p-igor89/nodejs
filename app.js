const fs    = require('fs');
const _     = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

let command = process.argv[2];
//console.log('Command ', command);

//node app.js add --title="Hello again" - create good object with excellent parser for Yargs like :
// Yards { _: [ 'add' ], title: 'Hello again', '$0': 'app.js' }
//console.log('Yargs', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        //if get new title which never use, this string will be write in json file
        console.log("Note created");
        notes.logNote(note);
    } else {
        //if get the same title before
        console.log("Note title taken");
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command ==='read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log("Node found");
        notes.logNote(note);
    }else {
        console.log('Note not found');
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : "Note not found";
    console.log(message);
}else {
    console.log('Command not recognise');
}
