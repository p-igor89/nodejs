console.log('Hello world');

const fs = require('fs'),
      os = require('os');

var user = os.userInfo();

fs.appendFile('firsttest.txt', `Hello ${user.username}!`);