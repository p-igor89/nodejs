//run this file using command in terminal nodemon app.js - it's will be waiting for changes before restart

console.log('Starting app.js');

const fs    = require('fs');
const os    = require('os');
const _     = require('lodash');
const notes = require('./notes');

//os.userInfo() method returns information about the currently effective user
let user = os.userInfo(),
    res  = notes.addNote(),
    filteredUniqElementInArray = _.uniq(['Igor','Igor',2,3,4,1,1]);

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

//use method from lodash
//https://lodash.com/docs - documentation for lodash
console.log(_.isString(true)); //false
console.log(_.isString("Igor")); //true

//use method which filtered only uniq element in array
console.log(filteredUniqElementInArray);