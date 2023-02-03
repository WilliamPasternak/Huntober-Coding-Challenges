import podcasts from "./data.js";

/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ... 
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }

*/ 

function createDescriptionsFor(data){
   data.forEach(podcast => podcast.description = `${podcast.title} is a ${podcast.duration} minute ${podcast.genre} podcast hosted by ${podcast.hosts[0]}`)
   console.log(data)
}

console.log(createDescriptionsFor(podcasts))