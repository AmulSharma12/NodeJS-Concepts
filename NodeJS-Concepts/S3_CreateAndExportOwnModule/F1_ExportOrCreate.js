//🚀 Here we will export/create the module/function so we can utilise in other files

//1. every individual file we called it as module.
//2. In order to use in some other file you have to export variable/function from the current module. 
//3. As bydefault for the module the scope is private you have to do public by exporting it.
const myName = "Amul Sharma";

const add = (a,b) => {
    return a + b;
}

const sub = (a,b) => {
    return a - b;
}

const mul = (a,b) =>{
    return a * b;
}


//🚀 exporting single function/variable
// module.exports = myName

//🚀 exporting multiple function/variable

//---------------------🚀 One way for multiple function export
//---- problem here is the last module.exports everything
//and only sub functionality works then
// module.exports= add
// module.exports = sub

//----solution using module.exports.__ = function/variable
//it passes as an object 
// module.exports.add = add
// module.exports.subnew = subtract

//---------------------🚀 Simple way for multiple function export
module.exports  = {add, sub, mul}