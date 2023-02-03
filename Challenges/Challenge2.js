//🚀Asynchronous CRUD Operations using FileSystem Module
//requiring the fs module of NodeJS
const fs = require('fs');

//-----------------🚀Asynchronous CRUD using FileSystem
//Create a Folder name Amul
//Create a file name bio.txt and data into it 
//Add more data into the file at the end of the existing data.
//Read the data without getting the buffer data at the first.
//Rename the file name to mybio.txt
//now delete both the file and folder

//---------------🚀Challenge 1
//---------------Creating the folder name Amul
// fs.mkdir('./Amul',(err)=>{
//     console.log("File created")
// })

//---------------🚀Challenge 2
//---------------Create a file name read.txt
// fs.writeFile('./Amul/read.txt','New file',(err)=>{
//     console.log("File created");
// })

//---------------🚀Challenge 3
//---------------Add the data at the end of the exisiting file
// fs.appendFile('./Amul/read.txt','New data added',
// (error)=>{
//     console.log("New data added");
// })

//---------------🚀Challenge 4
//---------------read the data of file without getting buffer at first
// fs.readFile('./Amul/read.txt',
// 'utf-8',
// (err,data)=>{
//     console.log(data);
// })

//---------------🚀Challenge 5
//---------------renaming the file 
// fs.rename('./Amul/read.txt', './Amul/readme.txt',
// (error)=> {
//     console.log("rename successfully")
// })


//---------------🚀Challenge 6
//---------------remove directory and files
// fs.unlink('./Amul/readme.txt', (err)=>{
//     console.log('file deleted successfully')
// })

// fs.rmdir('./Amul', (err)=>{
//     console.log("Directory deleted successfully")
// })

