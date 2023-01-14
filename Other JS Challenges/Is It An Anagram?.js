/* 
Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 
*/ 

// Option 1: Sort strings and compare:
function isAnagram(str1, str2){
  if(str1.length !== str2.length) return false
    return  str1.split('').sort((a,b) => a - b).join('')  === str2.split('').sort((a,b) => a - b).join('') 
}

  // Option 2: Create a list of seen letters and count them. If count of str2 is the same, they are anagrams.
 function isAnagram(firstStr, secondStr) {
    if (!firstStr || !secondStr) return false;
    if (firstStr.length !== secondStr.length) return false;
    const lookup = {};
    for (let first of firstStr) {
        lookup[first] = ((lookup[first] || 0 ) + 1);
    }
    for (let second of secondStr) {
        if (!lookup[second]) return false;
        lookup[second]--;
  }
  return true;
}

// Tests:
console.log(isAnagram("allergy", "gallery"),'true');
console.log(isAnagram("treasure", "measure"),'false');
console.log(isAnagram("a", "a"),'true');
console.log(isAnagram("ab", "a"),'false');
console.log(isAnagram("abb", "baa"),'false');