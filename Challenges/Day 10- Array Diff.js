function arrayDiff(a, b) {
  //Edge Cases
	if (a.length === 0) return []
	if(b.length === 0) return a

  // Get list of nums to remove
  let numsToRemove = new Set()
  for(let num of b){
    numsToRemove.add(num)
  }
  // Remove items from A
  return a.filter(num => (!numsToRemove.has(num)))
}


// Refactored
function arrayDiff(a,b){
  // if(a.length === 0 || b.length === 0){ return a }
  let newSet = new Set(b)
  return a.filter(n => !newSet.has(n) )
}