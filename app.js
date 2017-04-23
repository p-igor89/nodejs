const fs    = require('fs');
const _     = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

let command = process.argv[2];
console.log('Command ', command);

//node app.js add --title="Hello again" - create good object with excellent parser for Yargs like :
// Yards { _: [ 'add' ], title: 'Hello again', '$0': 'app.js' }
console.log('Yargs', argv);

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
    notes.getAll();
}else if(command ==='read'){
    notes.getNote(argv.title);
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}else {
    console.log('Command not recognise');
}
