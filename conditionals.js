const raining = true;
const cold = true;
const temperature = 16;

if (raining){
  console.log("Don't forget your umbrella!")
}

if (cold) {
 console.log("make sure you pick up a scarf!");
}

if(temperature < 0){
   console.log("Make sure you pik up a scarf!")
} else if(temperature < 15){
   console.log("Short sleeves won't cut it!");
}else {
   console.log("Short sleeves are fine.")
}


console.log("Now you're ready to go outside!")
