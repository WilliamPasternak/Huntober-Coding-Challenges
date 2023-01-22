/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).
*/ 


function countChars(str){
   let letters = str.split(' ')
                    .join('')
                    .toLowerCase()
   const seen = {}
   for(const letter of letters){
      seen[letter] = seen[letter] + 1 || 1 
   }
   return seen
}

// Tests:
console.log(countChars("Peggy Porth"))
console.log('{p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}')
console.log(countChars('will'))
console.log('{w: 1, i: 1, l: 2}')