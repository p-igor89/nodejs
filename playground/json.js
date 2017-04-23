/// / let obj = {
//     name: 'Igor'
// };
//
// let stringObj = JSON.stringify(obj);
//
// console.log(stringObj); //it will be string
// console.log(typeof stringObj);

// let personString = '{"name": "Igor", "age": "27"}';
// let person = JSON.parse(personString);
// console.log(typeof person); // it will be object
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: "Some title",
    boby: "Some body"
};


//put the string in the new json file
var originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
fs.writeFileSync('nodes.json', originalNoteString);

//read object from json file and parse it
var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);