// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     if ((currentNumber % 5 === 0) && (currentNumber % 7 === 0)) {
//         console.log("ChickenMonkey")
//     }
//     else if (currentNumber % 5 === 0) {
//         console.log("Chicken")
//     }
//     else if (currentNumber % 7 === 0) {
//         console.log("Monkey")
//     }
//     else if (currentNumber) {
//         console.log(currentNumber)
//     }
// };


// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.


let bandNumber = 1

const takeNumber = function (bandName) {
    let roster = `${bandNumber} . ${bandName}`
    bandNumber++
    return roster;
}



const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the



// UI/UX Challenge
// This is an optional challenge once you meet MVP. Make a new GitHub branch for this challenge.

// Nightclub management wants to use this app at the front door during the event. Incorporate the logic you have written and add an HTML document and apply CSS to make a mobile version of Battle of the Bands.






// Practice: Cookout
// Copy the following objects into your JavaScript file.


const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];


function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};


foods.forEach(function(currentObject) {
    grill(currentObject);
});



// for (i = 0; i <= foods.length; i++) {
//     grill(currentObject)
// };

console.log(cookedFood);