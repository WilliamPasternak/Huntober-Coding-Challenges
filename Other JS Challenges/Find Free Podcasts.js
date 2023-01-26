import podcasts from "./data.js";

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 
*/

function getFreePodcasts(data){
   let freePodcasts = data.filter(podcast => podcast.paid === false)
   let relevantInfo = freePodcasts.map(podcast => {
       return {
           'title': podcast.title,
           'rating': podcast.rating,
           'paid': podcast.paid,
       }
   })
   return relevantInfo
}

console.log(getFreePodcasts(podcasts))
