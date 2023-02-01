//Challenge 1 - Crud operations using FileSystem module

//Create a Folder name Amul
//Create a file name bio.txt and data into it 
//Add more data into the file at the end of the existing data.
//Read the data without getting the buffer data at the first.
//Rename the file name to mybio.txt
//now delete both the file and folder

//requiring fs system module in nodejs
const fs = require('fs')

//Task 1 - createFolder function for CRUD
const createFolder = (newFolder) =>{
    fs.mkdirSync(newFolder)
}


//Task 2 - createFile function for CRUD
const createFile = () => {
    fs.writeFileSync('./Amul/bio.txt', 'Bio file has created')
    console.log("File Created");
}


//Task 3 - append the data into the exisiting file
const updateData = (newData) => {
    fs.appendFileSync('./Amul/bio.txt', newData)
    console.log("Data updated successfully");
}

//Task 4 - Read the data without the buffer data at the first
const readFile = () => {
    const data = fs.readFileSync('./Amul/bio.txt','utf-8')
    console.log(data);
    console.log("file readed successfully")
}

//Task 5 - rename the file to mybio.txt
const renameFile = () =>{
    fs.renameSync('./Amul/bio.txt', './Amul/mybio.txt');
    console.log('file renamed successfully');
}


//Task 6 - delete both file and folder
const deleteFileFolder = () => {
    fs.rmSync('./Amul/mybio.txt');
    fs.rmdirSync('./Amul')
    console.log('File and folder deleted successfully');
}



//calling every function for CRUD operations
// createFolder("Amul")
// createFile()
// updateData(" New Data added")
//  readFile()
// renameFile()
// deleteFileFolder()

