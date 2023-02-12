//🚀 Json - NodeJS

//🚀 Theoretical - JSON (Javascript object notation)
//JSON is a lightweight format for storing and transporting data.
//JSON is often used for sent the data from the server. 

//💫 creating address object 
const address = {
    place : "New kanchanpur",
    city : "Jabalpur",
    state : "Madhya Pradesh"
};

//💫 printing address object properties
// console.log(address.place);
// console.log(address.city);
// console.log(address.state);


//💫 JSON.stringify(object) -> when you have to convert object into json.
const jsonData = JSON.stringify(address)
console.log(jsonData.channel);
//output - {"place":"New kanchanpur","city":"Jabalpur","state":"Madhya Pradesh"}


//💫 JSON.parse(jsonData) ->  when you have to convert json to object.
const objectData = JSON.parse(jsonData);
console.log(objectData)