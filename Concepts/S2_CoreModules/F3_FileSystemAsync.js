//🚀Here we will be utilising the same fs module but in asynchronus way.
const fs = require("fs");

//--------------------------------🚀 Writing into the file
fs.writeFile("read.txt", "Today is wednesday",
(err) =>{
    console.log('File created');
    console.log(err)
});


//we pass them as a function as an argument - called callback that gets called when the task get completed.
//The callback has an argument that basically tell you whether your task get completed or not.
//Now we need to say what to do when the writeFile has completed  (even if it is nothing) , and started checking for th errors.

//------------------------------🚀Appending data into the file
fs.appendFile('read.txt', 
' my channel',
(err) => {
    console.log("Task completed");
} )

//------------------------------🚀reading file asynchronusly

//reading with buffer data at first
fs.readFile('read.txt', (err,data) => {
    console.log(data);
})

//reading without buffer data at first
//specify encoding here
fs.readFile('read.txt','utf-8', (err,data) => {
    console.log(data);
})