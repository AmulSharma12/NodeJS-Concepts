//🚀 Json Challenge

//🚀 Challenges
//1. convert to json => DONE
//2. dusre file me add krna jsonData ko => DONE
//3. read krna file ko => DONE
//4. again convert to javascript object
//5. console.log()

//💫  creating address object 
const address = {
    place : "New kanchanpur",
    city : "Jabalpur",
    state : "Madhya Pradesh"
};

//step 1 - convert to json
const jsonData = JSON.stringify(address)

//step 2 - dusre file me add krna jsonData ko
const fs = require('fs');
fs.writeFile('./NodeJS-Concepts/S9_JSON/json1.json', jsonData , (err)=>{
    console.log("File created");
})

// step 3,4,5 - read the file 
fs.readFile('./NodeJS-Concepts/S9_JSON/json1.json','utf-8' ,(err, data)=>{
    console.log(data);
    const originalData = JSON.parse(data);
    console.log(originalData);

});


// step 4 - 