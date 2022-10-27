function duplicateEncode(word){
  word = word.toLowerCase()
  let chars = word.split('')
  const lookup = {}
  
// Count occurances in lookup object
  for(char of chars){
	lookup[char] = (lookup[char] || 0 ) + 1
}

// Update array based on char count
for(let i = 0; i < chars.length; i++){
  lookup[chars[i]] === 1 ? chars[i] = '(' : chars[i] = ')' 
}

return chars.join('')
}

// Tests
console.log(duplicateEncode("din"),"(((")
console.log(duplicateEncode("recede"),"()()()")
console.log(duplicateEncode("Success"),")())())")
console.log(duplicateEncode("(( @"),"))((")