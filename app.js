console.log('Starting app.js');

const fs    = require('fs');
const os    = require('os');
const notes = require('./notes');

//os.userInfo() method returns information about the currently effective user
let user = os.userInfo(),
    res  = notes.addNote();

//Asynchronously append data to a file. The first argument is file name for way and second data
//Each time we add this text in txt file after run this app.js file
//`${user.username}` - this is the same like user.username but without "+"
fs.appendFile('firsttest.txt', `Hello ${user.username}! You ahe is ${notes.age}`, (err) => {
    if(err){
        console.log('Enable to write to file');
    }
});

//show the function from addNote function
console.log(res);

//use function which calculate two numbers
console.log('Result: ' + notes.add(5, -2));