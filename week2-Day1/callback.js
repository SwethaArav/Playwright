function checkAvailablity(movieName,playMovie){


  // console.log(`Checking the movie name:`);


   console.log("Movie"+movieName+" is available");  


   playMovie() 
    
}


function playMovie(){
console.log(`Now playing the movie`);


}


checkAvailablity("Spider Man",playMovie)