//🚀 npm install validator - for emails

//requiring validator
const validator = require('validator');
const chalk = require('chalk');

//isEmail('email') - return true if valid email ,otherwise false.
const isValidEmail = validator.isEmail('amulsharmarr67@gmail.com');

//if chalk is true - print green otherwise red.
console.log(isValidEmail ? chalk.green.inverse(isValidEmail) : chalk.red.inverse(isValidEmail));