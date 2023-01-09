/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 
*/


function panic(msg){
    return msg.toUpperCase().split(' ').join(' 😱 ') + '!'
}

// Arrow function:
const panic = msg =>msg.toUpperCase().split(' ').join(' 😱 ') + '!'


// Tests
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))