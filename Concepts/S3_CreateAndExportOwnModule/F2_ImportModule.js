//🚀 Here we will import the module and utilise it accordingly.
// const operator = require('./F1_ExportOrCreate')

//-------------
//As it is not the built-in module - so we can't do require just 
//like other modules for e.g.   require('fs')

//-------------
//As this module is created by own so you have to give the 
//relative path for it

// console.log(myName)

//when it comes as an object 
// console.log(operator)
// console.log(operator.add(3,4))
// console.log(operator.subnew(5,4))


//----------------------🚀 Better way to import is 
//---------------------- object destructuring  const {.....}
//position does not matter you can interchange as well
//but the name while exporting is similar to name at importing

// const { add, sub, mul} = require('./F1_ExportOrCreate')
// const { mul, sub, add} = require('./F1_ExportOrCreate')
console.log(add(3,4))
console.log(sub(5,4))
console.log(mul(5,5))