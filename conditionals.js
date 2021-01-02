const raining = true;
const cold = true;
const temperature = 16;
const isCitizen = true;
const age = 26;

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

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}

console.log("Now you're ready to go outside!")
