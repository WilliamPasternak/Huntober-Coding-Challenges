import postData from "./data.js";
export default [
     {
        post: "A lot of you have asked about my morning skin care routine...",
        likes: 348
     },
     {
        post: "New Year, new me. #blessed",
        likes: 102
     },
     {
        post: "Sunday by the pool 🌴 #vibes #mood #hotdoglegs",
        likes: 544
     },
     {
        post: "Here are my top 5 #notsponsored unbiased dry shampoo recs...",
        likes: 745
     },
     {
        post: "Last day in Hawaii! The tans will fade but the memories will last forever #holidays #foreverhawaii #blessed #followme",
        likes: 412
     },
     {
        post: "Leg day #summerbody2022 #gymshark #beachworkout",
        likes: 275
     },
]
   

/* Popularity Contest 

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 
*/

function calcAverageLikes(data){
  let likes = data.map(post => post.likes)
  return ((likes.reduce((acc, cur) => acc + cur)) / likes.length)
} 

  


console.log(calcAverageLikes(postData))
