/*  
Grandpa accidentally typed and saved his password with a bunch of extra characters. 
Help him recover his password by removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
 
function removeDupeChars(chars){
   let dupesRemoved = ''
   for(let char of chars){
       if(!dupesRemoved.includes(char)){
           dupesRemoved += char
       }
   }
   return dupesRemoved
}

console.log(removeDupeChars("9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"),'938dsabj2fcgq');
console.log(removeDupeChars("aabbccb1212"),'abc12');
