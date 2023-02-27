/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

// cant refer to each country by their name because they aren't properties of UK but values in an array
// access through indexing 

/**
 * Q1. Add some tourist attractions to England
 */

unitedKingdom[1].touristAttractions = ["Brighton Beach", "Buckingham Palace", "Big Ben"]

// console.log(unitedKingdom[1]);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

unitedKingdom[2].capital = "Cardiff"

// console.log(unitedKingdom[2]);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom[3]);

console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

let scotlandPopulation = unitedKingdom[0].population;
let largest = true;
let smallest = false; 

for (let i = 0; i < unitedKingdom.length; i++){
  if(unitedKingdom[i].population > scotlandPopulation) {
    biggest = false;
  } else if (unitedKingdom[i].population < scotlandPopulation) {
    smallest = false;
  }
}

if (largest) {
  console.log("Scotland has the largest population");
} else if (smallest) {
  console.log("Scotland has the smallest population");
} else {
  console.log("Scotland has a population somewhere in the middle");
}