Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

function domainName(fullDomain){
  	const domainStart = fullDomain.indexOf(".") 
	  const domainEnd = fullDomain.lastIndexOf(".")
return fullDomain.slice(domainStart,domainEnd)
}
// Test Cases
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites")
console.log(domainName("https://www.cnet.com"), "cnet")
console.log(domainName("www.williampasternak.com"), "williampasternak")