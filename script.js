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
  },
  orderPizza: function(mainIngredient,...otherIngredients){
    console.log(mainIngredient),
    console.log(otherIngredients);

  },

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

// Objects====create new restuarant object from old restuarnt and add on some more
const newRestuarant = {foundIn:1998,...restaurant, founder:'Guiseppe'};
console.log(newRestuarant);
const restaurantCopy = {...restaurant};
restaurantCopy.name  = 'Ristorante Roma';
console.log(restaurantCopy)


//NB SPREAD UNPARCKS ARRAY INTO INDIVIDUL ELEMENTS WHILE REST PACKS ELEMENTS INTO AN ARRAY TO rest.

//Rest operator
//pack elements into an ARRAY. opposite of spread.

//SPREAD, because right side of =
const arr1 = [1,2,...[3,4]];



//rest Operator opposite of spread operator. Spread allows to build new arrays or pass multiple value to functions
// spread operator unpacks the array while Rest packs elements into an array.
//spread is used on right hand side of equal sign.
//REST, because on left side of =
const[aa,bb,...others] = [1,2,3,4,5];
console.log(aa,bb,others); // 1,2,[3,4,5]. It takes the 'rest' of what is left from the destructuring and makes another array called 'others'

//Therefore the spread can only be the last element in the array.
//There can only be one rest element.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// If you want to take the weekdays in one array and leave out saturday. call new array weedays
const{saturday, ...weekdays} = restaurant.openingHours;
console.log(weekdays)

//2. functions
// const add = function(...numbers){
//   let sum=0;
//  for (let i=0; i < numbers.length;sum++){
//  sum += numbers[i];
//  console.log(sum)   
//   }
// }

// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);
// const tt = [23,5,7];
// add(...tt);

// orderPizza(olives,pepperoni,mashrooms,tomato);
// restaurant.order(mashrooms)

//conclusion spread operators is used where you would write values separated by comas
//rest is where you would write variable names separated by comas..not values. which would otherwise be separated by comas. rest collects values that where not used

//Short circuting
//Use Any data type, return Any type as long as it is a truthy.
console.log(3|| 'Jonas');  //3
console.log('' || 'Jonas'); // Jonas
console.log(true|| 0);  //true
console.log(undefined || null); //null i.e returns the last value even if they are both falsy
console.log(undefined || 0 || ''|| 'hello', 23||null); // hello
//practical use. You want to get number of guests but you dont know whether they exist
const guests1 = restaurant.numGuests ?numGuests : 10;
console.log(guests1) // 10 bse numGuests is undefined

const guests2 = restaurant.numGuests || 10;
console.log(guests2)

//The problem with the above is if the numGuests is 0, it will return 0;
//solution?\

//& is diferent, it returns the first false value without checking the second
// and if both are tur, the end value is returned
console.log(7 && 'Jonus') // Jonus
console.log('Hello'&& 22 && null && 'Jonas'); // null so will short-circuit Jonas

//Practical example+++means if restaurant.order pizza exists then return the function.
if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom', 'spinach')
}
// same as 
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach')


// nullish coerlescing operator
// When using a || it will see the 0 as a false and therefore miss the zero values while trhe null operator recognises 0;
//nullish values = null , undefined and does not include '0' or 'undefined'.

const guestNum = 0;
const guests22 = guestNum || 10;
const guests21 = guestNum ?? 10;
console.log(guests22);   // 10
console.log(guests21);   // 0


const rest1 = {
  name: 'capri',
  numGuests: '20',
 
};
const rest2 = {
  name: 'La Plazza',
  owner: 'Giovanni',
};


//OR assignment operator
//Short circuting
// rest1.numGuest= rest1.numGuests || 10;
// rest2.numGuest = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
//Same as writing above., This will return 10 if numGuest is 0.
rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
// console.log(rest1, rest2)

// rest1.owner = rest1.owner && '<ANONYMOUS>'; Owner will appear as undefined because no owner
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// AND operatoir Same as above
rest1.owner &&= '<ANONYMOUS>';  // onwer will not appear or set to undefined like the above.
rest2.owner &&= '<ANONYMOUSName>';

console.log(rest1,rest2);


// Assignment
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Createoneplayerarrayforeachteam(variables'players1'and 'players2')
// 2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
// 4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
// 6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// GOOD LUCK 😀