//🚀 Module Wrapper function in NodeJS

const myName = "Amul Sharma";
console.log(myName);

//Individual file are module 
//And scope of it is private.

//But at the time of compilation NodeJS will add one more wrapper function
//Grouping operator - () - inside that anonymous function - is called as Module wrapper function.
//everything define inside it become private. IIFE in javascript
//for every individual file its a local scope.
(function (exports, require,  module, __filename, __dirname){
    const myName = "Amul Sharma";
    console.log(myName);
})();


//get the directory name and filename
console.log(__dirname)
console.log(__filename)


