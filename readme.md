## 🚀NodeJS

<hr style="border-color:#FF4500;">

## 🚀What is NodeJS ?

- NodeJS is neither language nor framework/library.
- NodeJS is a javascript runtime built on chrome V8 Javascript engine.
- NodeJS is a javascript running on the server.
- Javascript runtime ?
  - A runtime environment is where your program will be executed. JavaScript code may be executed in one of two runtime environments
  - Browser/Node

## 🚀History of NodeJS

- In 1995, Netscape also written Netscape enterprise server which allowed javascript to run on the server.
- Ryan Dahl google engineer in 2009 came to know why not run Javascript outside the browser.
- So, he took V8 engine and embedded in a c++ program called node.exe later it will be known by NodeJS.

## 🚀Chrome V8 Javascript Engine

- Every browser have engine so that the code can be converted to machine understandable code .
- Javascript engines :-
  1. Google Chrome - V8 Javascript engine
  2. Mozilla firefox - Spider Monkey
  3. Safari - Nitro

## 🚀When to use NodeJS ?

- Use of NodeJS
  1. I/O Bound
  2. Data Streaming applications.
  3. Real Time chat applications.

<hr style="border-color:#FF4500;">

## 🚀Setup and Installation

- Download and install VScode - IDE
- Download and install NodeJS - Javascript runtime
- [Setup Video Link](https://youtu.be/mIW_8dMQaUk)

## 🚀Pre-requisites for NodeJS

- Javascript basics
- Modern javascript ES5 & ES6 || ES2015
- client server model (optional)

<hr style="border-color:#FF4500;">

## 🚀Repl in NodeJS

- Repl is the feature of NodeJS which is used to do experiment with nodejs codes and to debug the javascript codes.
- R (Read) -> Read user input , parse the user-input into javascript data structure and stores in the memory.
- E (Eval) -> Evaluates the javascript data structure.
- P (Print) -> Print the result.
- L (Loop) -> Loops the above command untill the user presses ctrl-c twice.
- To start the Repl 
  - type node and press enter.
- press double time tab to see all modules.
  - this will give you all the modules that is suported by nodeJS version that you have installed.
- enter the name of module to get all the details.
  - for example - type fs and press enter.

<hr style="border-color:#FF4500;">

## 🚀Core Modules in NodeJS

- NodeJS is a set of built-in modules which you can use without further installation.
- fs - File system module for files and folders.
  - writeFileSync()
  - appendFileSync()
  - renameFileSync()
  - readFileSync()
  - writeFile()
  - appendFile()
  - readFile()
  
- NOTE 
  - while reading file we automatically get buffer data
            if you have to read without buffer data first must give file encoding as an argument. readFile('file', 'utf-8')
  - In, Asynchronus function the first argument of the callback is always an error.
- os - os module for operating sytem .
  - hostname()
  - platform()
  - type()
  - arch()
- path - path module for working with directory and files path.
  - basename('path') - give the file name with extension.
  - extname('path') - give the extension name of the file.
  - parse('path') - give the details of the hierarchy.

<hr style="border-color:#FF4500;">

## 🚀Synchronous vs Asynchrounous Programming 

- Synchronous Programming
  - In this, the current instruction then completely executed then the next instruction will execute.

- Asynchronous Programming
  - In this, if the instruction have need of I/O performance or network call then next set of instruction will execute.

<hr style="border-color:#FF4500;">

## 🚀 Import and Export Own Module in NodeJS

- Exporting Module/file
  - we usually export the module so its implementation can be utilise in some other files.
  
  - Basically write once, use as many times anywhere  - DRY principle.
  
  - Firstly, we give the implementation in the file/module and the variable/function you have to expose/export you can do  by using - module.exports
  
  - For exporting single function/variable
   
     ```
     module.exports = functionName;
     ```
  - For exporting multiple function/variable
    ```
    module.exports = {fun1, fun2};
    ```
    - you can give as much as you want.


<hr>

- Importing Module/file
  - In this, you will import the function which are exporting from other files.
  - For importing single function :-
    ```
    const variableName = require('./file');
    ```
    - give the relative path of the file.
  - For importing multiple function :-
    ```
    const {fun1, fun2} = require('./file');
    ```
- NOTE : In functions place you can use variables as well.


<hr style="border-color:#FF4500;">

## 🚀 NPM in NodeJS

- npm stands for node package manager.
- node package manager provide us the packages for the javascript runtime environment NodeJS.
- Steps to work with npm :-
  1. Initialise npm in your project.
     -  type npm init and press enter.
       ```
        npm init
       ```
     - this will create package.json file.
     - package.json consist of the details of our project.
  2. Now you are good to go to install the packages.
     - type npm install package.
     -  for example - npm install chalk.
       ```
      npm install chalk
       ```
     -  After installing our project look like this :-
        1. package will be added in dependecies in package.json.
        2. package.lock.json created which have detailed information about the packages.
        3. node_modules folder contains the code of that package
- Now, do whatever you want to implement using that package!


<hr style="border-color:#FF4500;">

## 🚀 Nodemon in NodeJS

- nodemon is a global npm module.
- Global means it is independent of any specific project.
- command for installating nodemon globally :-
```
npm install nodemon -g
```
- here -g is flag to install it globally.
- To run any file :-
```
nodemon fileName.js
```
- Now, whenever you made changes it will automatically run your project.
- for killing nodemon terminal - press ctrl+c.



<hr style="border-color:#FF4500;">

## 🚀 Creating own server in NodeJS

- Understand the basics first 💫
- For any web application we need web server that will handle the incoming http requests.
- Some web server examples :-
  - IIS - Asp.net web application
  - Apache - php/java web application
- NodeJS allows us to create our own web server that can handle the http request asynchrounously.
- You can run IIS/Apache for NodeJS web application but NodeJS web server is recommended.
- Steps for creating web server :-
  1. Require the http module
  
  ```javascript
  const http = require('http'); 
  ```
  2. http.createServer() allows us to create server it takes 2 parameters request, response 
  3. request object used to get the information about the current http request. e.g. url, data, http header
  ```javascript
  const server = http.createServer((req, res)=>{
    res.end('response from the other side');
  });
  ```
  4. You have to listen the incoming http request
  ```javascript
  server.listen(8000,'127.0.0.1', ()=>{
    console.log('listening to the port 8000');
  })
  ```
- Conclusion - If you are a server, you must have to listen to the http requests. 



<hr style="border-color:#FF4500;"> 
 🔗 Follow Me 👇🏻

[![LeetCode](https://img.shields.io/badge/LEETCODE-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06)](https://leetcode.com/Amul-Sharma/)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amulsharma12/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AmulSharma12)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/amul_op____/)
