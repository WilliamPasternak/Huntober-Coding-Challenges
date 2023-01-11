Write a function that will capitalize every word in a sentence.  

// Helper to capitalize the first letter in a word
function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1)
}

function toTitleCase(str){
    return str.split(' ').map(word => capitalizeWord(word)).join(' ')    
}

// Tests
console.log(capitalizeWord("will"),'Will');
console.log(toTitleCase("hello there"),'Hello There');