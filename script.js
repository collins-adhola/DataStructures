'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  }

};

const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
const [first, second] = restaurant.categories;
console.log(first, second);

//This you skip the middle on
let [first2, , second2] = restaurant.categories;

console.log(first2, second2);

//switching elements

[second2, first2] = [first2, second2];

console.log(first2, second2);

//To return values fro a function- order function destructed
restaurant.order(2, 0);
let [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested destructuring
let nested = [5,6,[7,9]];  //skip middle and collect from second array
let [d,,[a,b]] = nested;
console.log(d,a,b)

//set default values. if you dont know length of array being destructed you can set default values to avoid returning undefined
const [p=1,r=1,t=1,o=1]= [8,9];
console.log(p,r,t,o)  //return 8,9,1,1

const {name, openingHours,categories} = restaurant;
console.log(name, openingHours, categories);

const {name:restuarantname,openingHours:hours, categories:tags } = restaurant;
console.log(restuarantname, hours,tags);


//Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 1?"),
// ];
// console.log(ingredients)

//you can now order pasta with a spread operator
// restaurant.orderPasta(...ingredients);

// Objects
const newRestuarant = {foundIn:1998,...restaurant, founder:'Guiseppe'};
console.log(newRestuarant);
const restaurantCopy = {...restaurant};
restaurantCopy.name  = 'Ristorante Roma';
console.log(restaurantCopy)

//Rest operator
//pack elements into an ARRAY. opposite of spread.

//SPREAD, because right side of =
const arr1 = [1,2,...[3,4]];

//REST, because on left side of =
const[aa,bb,...others] = [1,2,3,4,5];
console.log(aa,bb,others);


// otherfoods creates a separate array  , and tghe pizza, risotto and not in array, that skipped will not appear.
//Therefore the spread can only be the last element in the array.
//There can only be one rest element.

const [pizza , , risotto,...otherFood]= [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]
console.log(pizza, risotto, otherFood);

// Spread on objects  - lets look at open days
// Object

const{sat,...weekdays }= restaurant.openingHours;
console.log(weekdays)