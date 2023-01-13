/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 
*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    if(word[0] === ':' && word[word.length - 1] === ':'){
        let wordKey = word.slice(1,-1).toLowerCase()
        if(wordKey in emojis){
            return emojis[wordKey]
        }
    }
    return word
}

function emojifyPhrase(phrase){
    return phrase.split(' ').map(word => emojifyWord(word)).join(' ')
}
console.log(emojifyWord(":heart:"), '💜');
console.log(emojifyWord(":flower:"), 'flower');
console.log(emojifyWord("elephant"),'elephant');
console.log(emojifyPhrase("I :heart: my :cat:"),'I 💜 my 🐱');
console.log(emojifyPhrase("I :heart: my :elephant:"),'I 💜 my elephant');