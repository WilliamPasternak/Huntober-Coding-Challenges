/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.
*/

function altCaps(str){
    let altString = '';
    for(let i = 0; i < str.length; i++){
        i % 2 == 0 ? newStr += str[i].toUpperCase() : newStr += str[i]
    }
    return altString;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));


// Tests:
console.log(altCaps("I'm so happy it's Monday"), "I'M So hApPy iT'S MoNdAy");
console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"), 'WhEn yOu vIsIt POrTlAnD YoU HaVe tO Go tO VoODOo DOnUtS');
