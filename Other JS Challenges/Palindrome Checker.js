/*  
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str){
    let left = 0
    let right = str.length - 1
    while(left < str.length / 2){
        if(str[left] != str[right]) return false
        left++
        right--
    }
    return true
}



// Test your function
console.log(isPalindrome("abba"),'true');
console.log(isPalindrome("civic"),'true');
console.log(isPalindrome("octopus"),'false');
console.log(isPalindrome("pumpkins"),'false');
console.log(isPalindrome("madam"),'true');
