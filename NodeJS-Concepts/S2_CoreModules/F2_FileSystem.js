//file system module in NodeJS
const fs = require("fs");

// 🚀 Writing in the file
//------------------------------writeFileSync('file', 'data')
//if file not exist then file create and then data added.
// fs.writeFileSync('read.txt','Demo file created by fs module')

//if file already exist then overwrite data .
// fs.writeFileSync('read.txt','New data')

//-----------------------------appendFileSync('file', data)
// this will append the data in the file if present if not then create file and then append
// fs.appendFileSync('read.txt', 'new data')
// fs.appendFileSync('rea.txt', 'new data')

// 🚀 Reading from the file
//NodeJS includes additional data type called buffer.
//buffer is used to store the binary data.
//while reading from the file or recieving the dat from the network.

// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);
// console.log(buf_data.toString());

// 🚀 Rename the file
// fs.renameSync(oldpath, newpath)
// fs.renameSync("./readwrite.txt", "./read.txt");
