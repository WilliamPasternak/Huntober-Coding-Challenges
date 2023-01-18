Factorial

#Your task
You have to create the function factorial that receives n and returns n!. You have to use recursion.

function factorial(num){
	if(num === 0 || num === 1) return 1
	return num * factorial(num - 1)
}

// Tests:
console.log(factorial(0) , '1')
console.log(factorial(1) , '1')
console.log(factorial(2) , '2')
console.log(factorial(3) , '6')
console.log(factorial(3) , '24')
console.log(factorial(5) , '120')