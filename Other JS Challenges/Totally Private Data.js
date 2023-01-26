import userData from "./data.js";

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 
*/

function transformData(data){
    let newData = data.map((person) => { 
        return {
            'name' : `${person.name.first} ${person.name.last}` ,
            'birthday': new Date(person.dob.date).toDateString(),
        }
    })
    return newData
}

console.log(transformData(userData));
