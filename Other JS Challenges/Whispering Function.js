/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 
*/

// Normal Function
function whisper(msg){
    return msg.endsWith('!') ? 
   `shh... ${msg.slice(0,-1).toLowerCase()}.` : 
   `shh... ${msg.toLowerCase()}`  
}

// Arrow Function
const whisper = msg => msg.endsWith('!') ? `shh... ${msg.slice(0,-1).toLowerCase()}.` : `shh... ${msg.toLowerCase()}`  


// Tests:
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));