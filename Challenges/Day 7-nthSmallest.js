function nthSmallest(arr,n){
	let sortedArr = arr.sort((a,b) => a - b)
	return sortedArr[n - 1]
}

function nthSmallest(arr,n){
  return arr.sort((a,b) => a - b)[n-1]
}

const nthSmallest = (arr,n) => arr.sort((a,b) => a - b)[n - 1]