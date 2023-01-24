
/* 
Cat mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

// Built in .flat() method.
    const flatten = arr => arr.flat();

// Manually
function flatten(arr){
    const flattenedArr = []
    arr.forEach(element => {
        if(typeof(element) !== 'string'){
            for(let i = 0; i < element.length; i++){
                flattenedArr.push(element[i])
            }
        }
        else{
             flattenedArr.push(element)
        }
    })
    return flattenedArr
}

// Tests:
console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
