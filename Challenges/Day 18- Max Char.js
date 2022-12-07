Given a string of characters, return the character that appears the most often.
No String or Array Methods (well brute force it first, but then no methods)! 

function findMaxChar(string){
    const letterCount = {}
    let maxChar = string[0]
    let maxCharCount = 0
    for(let char of string){
      letterCount[char] = ( letterCount[char] || 0 ) + 1
   }
   for(let letter in letterCount){
      if(letterCount[letter] > maxCharCount){
         maxChar = letter
         maxCharCount = letterCount[letter]	
   }
  }
return maxChar
}

// Tests
console.log(findMaxChar('a'), 'a')
console.log(findMaxChar('abbbc'), 'b')
