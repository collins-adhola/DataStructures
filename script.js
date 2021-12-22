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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient), console.log(otherIngredients);
  },
};

const arr = [2, 3, 4];
const [x1, y, z] = arr;
console.log(x1, y, z);
const [first, second] = restaurant.categories;
console.log(first, second); //italian, Pizzeria

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
let nested = [5, 6, [7, 9]]; //skip middle and collect from second array
let [d, , [a, b]] = nested;
console.log(d, a, b); // 5,7,9

//set default values. if you dont know length of array being destructed you can set default values to avoid returning undefined
const [p = 1, r = 1, t = 1, o = 1] = [8, 9];
console.log(p, r, t, o); //return 8,9,1,1

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restuarantname,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restuarantname, hours, tags);

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
const newRestuarant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestuarant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);

//NB SPREAD UNPARCKS ARRAY INTO INDIVIDUL ELEMENTS WHILE REST PACKS ELEMENTS INTO AN ARRAY TO rest.

//Rest operator
//pack elements into an ARRAY. opposite of spread.

//SPREAD, because right side of =
const arr1 = [1, 2, ...[3, 4]];

//rest Operator opposite of spread operator. Spread allows to build new arrays or pass multiple value to functions
// spread operator unpacks the array while Rest packs elements into an array.
//spread is used on right hand side of equal sign.
//REST, because on left side of =
const [aa, bb, ...others] = [1, 2, 3, 4, 5];
console.log(aa, bb, others); // 1,2,[3,4,5]. It takes the 'rest' of what is left from the destructuring and makes another array called 'others'

//Therefore the spread can only be the last element in the array.
//There can only be one rest element.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// If you want to take the weekdays in one array and leave out saturday. call new array weedays
const { saturday, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

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
console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); //true
console.log(undefined || null); //null i.e returns the last value even if they are both falsy
console.log(undefined || 0 || '' || 'hello', 23 || null); // hello
//practical use. You want to get number of guests but you dont know whether they exist
const guests1 = restaurant.numGuests ? numGuests : 10;
console.log(guests1); // 10 bse numGuests is undefined

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//The problem with the above is if the numGuests is 0, it will return 0;
//solution?\

//& is diferent, it returns the first false value without checking the second
// and if both are tur, the end value is returned
console.log(7 && 'Jonus'); // Jonus
console.log('Hello' && 22 && null && 'Jonas'); // null so will short-circuit Jonas

//Practical example+++means if restaurant.order pizza exists then return the function.
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
// same as
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// nullish coerlescing operator
// When using a || it will see the 0 as a false and therefore miss the zero values while trhe null operator recognises 0;
//nullish values = null , undefined and does not include '0' or 'undefined'.

const guestNum = 0;
const guests22 = guestNum || 10;
const guests21 = guestNum ?? 10;
console.log(guests22); // 10
console.log(guests21); // 0

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
rest1.owner &&= '<ANONYMOUS>'; // onwer will not appear or set to undefined like the above.
rest2.owner &&= '<ANONYMOUSName>';

console.log(rest1, rest2);

// Assignment
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:

// 4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')

// 7. The team withtheloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team(variables'players1'and 'players2')

let players1, players2;

[players1, players2] = game.players;

console.log(players1);
console.log(players2);

// 2. The first player in any player array is the goal keeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(fieldPlayers);
console.log(gk);

// 3. Create an array'allPlayers'containingallplayers of both teams(22 players)
let allPlayers = [];
allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. Duringthegame,BayernMunich(team1)used3substitute players.So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const playersFinal = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(playersFinal);

// 5. Based on the game.odds object,create one variable for each odd (called 'team1', 'draw' and 'team2')

let {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);
console.log(draw);

// 6. Write a function('printGoals')that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

printGoals('Lewandowski', 'Gnarby');
printGoals(...game.scored);
//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

console.log(team1 < team2 ? 'team1 wins' : 'team2 has won');

//team1 < team2 && console.log('Team 1 is likely to Win);
//team1 > team2 && console.log('Team 2 is likely to Win);

//Loops - for -loops
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const item3 of menu) console.log(item3);

//enter numbers at begining of entry.   ".entries()" places items in their own array

for (const [i, item4] of menu.entries()) console.log(`${i + 1}:${item4} `);

//Object literals
const newObject = {
  billy: function (t) {
    console.log(t + 8);
  },
  //new way to wite this
  billy2(t) {
    console.log(t + 8);
  },
};

//Optional chaining using ?  and the null ?? operator
// If for example you want to get 'opening hours' on a mon but not sure whether it opens on monday. You could use an if statement this:
console.log(restaurant.openingHours?.open);
console.log(restaurant.openingHours?.thurs?.open);

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // || would read saturday 0 opening as a falsy so we use the nullified operator.
  //means if not open then use the 'closed
  console.log(`We are open ${day} at ${open}`);
}

//METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist.');
// check if order function exists and if so, enter the paramenters and if not write statement.

//ARRAYS
const users = [
  [{ name: 'Jonas', email: 'Hello@jonas.io' }],
  [{ name: 'Jonas', email: 'Hello@jonas.io' }],
];
console.log(users[0]?.name ?? 'User array empty');

//PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

// ENTIRE OBJECT
//entries returns the key and values together.
const entries = Object.entries(openingHours);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and closed at ${close}`);
}

//Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:

// 2. Usealooptocalculatetheaverageoddandlogittotheconsole(Wealready studied how to calculate averages, you can go check if you don't remember)
// 3. Printthe3oddstotheconsole,butinaniceformattedway,exactlylikethis:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }
// GOOD LUCK 😀

// 1. Loop over the game.scored array and print each player name to the console,
//     a long with the goal number (Example: "Goal 1: Lewandowski")

for (const [i, players] of game.scored.entries()) {
  console.log(`${i}: ${players}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const odds = Object.values(game.odds);
let avg = 0;
for (let odd of odds) {
  avg += odd;
  avg /= odds.length;
  console.log(avg);
}

// 3. Print the 3 odds to the console,but in a nice formatted way,exactly like this:

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory for ${game[team]}`;
  console.log(`Odd of ${teamStr}  is ${odd}`);
}

//+++++++++++++++++++++++++Sets++++++++++++++++++++
const orderSet = new Set([
  'Pasta',
  'pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

//loop set ---- same
for (const order of orderSet) console.log(order);

const staff = ['waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//turning set into array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//See unique values in an array. enter it as a set.
console.log(
  new Set(['Walter', 'Chef', 'Walter', 'Manager', 'Chef', 'Walter']).size
);

//how many different letters in a string
console.log(new Set('adhola').size);

//++++++++++++++++++++++Maps
//add elements with set method
const rest = new Map();
rest.set('name', 'Classico italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // 1, 2 will show

console.log(
  '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'
);
rest
  .set('categories', ['Italian', 'Pizzera', 'vegetarian', 'Organic'])

  .set('open', 11)
  .set('Close', 23)
  .set(true, 'we are open : D')
  .set(false, 'We are closed : (');

console.log(rest.get('name')); //
console.log(rest.get(true)); // We arfe open
console.log(rest.get(false)); // We are closed.
console.log(rest.get(1)); // We are closed.

//add to map without set method.
//prefred way to write map in code
const question = new Map([
  ['question', 'What is the best programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question);

//++++++++Convert objects to Maps
// same as calling object by Ogject.entries(OpeningHours)= returns arrays of arrays. keys with values
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
//Remember the above triick when you have an Object to turn into a Map.

//++++++++interating Maps
//Just like in Objects we need keys and values but there we need '.entries because objects are not interable.
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log`Answer ${key}: ${value} `;
}

//turn it to number because keys to compare to are numbers
// const answer = Number(prompt ('Your answer'));
const answer = 3;

//Get answer from Booleon key... iF its true it activates the True key
console.log(question.get(question.get('correct') === answer));

//Conver Map tp Array
console.log([...question]); // whole object into array
console.log([...question.keys()]);
console.log([...question.values()]);

console.log(
  '+++++++++++++++++++STRINGS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'
);
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[3]);
console.log('b737'[0]);

//Length
console.log(airline.length);
console.log('b737'.length);

//Indexof
console.log(airline.indexOf('r'));

//last indexOf
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

//Slice
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' '))); // TAP - Use begining

console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal - Use the end -+1 to take away space before portugal

console.log(airline.slice(-2)); //cuts from behind
console.log(airline.slice(1, -1)); //cuts from begining to last 2nd last degit - portuga

//Game to practically use slice - Plane middle seat are B and C
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat!');
  } else console.log('You are lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Fix Capitalization
const passenger = 'coLLIns';
// turn to lowercase
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
//create function which take passenger name and return right one

//comparing emails- capitalisation
const email = 'hellojonas.io';
const loginEmail = ' Hello@Jonas.io\n';

const lowerEmail = loginEmail.toLowerCase();

//++   trim() - takes away white spaces
const trimmedEmail = lowerEmail.trim(); // takes away white spaces at end.
//shorter
const normalisedEmail = loginEmail.toLowerCase().trim(); // trim called on string lower
console.log(normalisedEmail);
console.log(trimmedEmail);

//+++ Replace()+++
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // replaced £ and period.
console.log(priceUS);

const announcement =
  ' all passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

//+++++++++BOLEANS+++++startWith(), includes()
const planes = 'Airbus A320neo';
console.log(planes.includes('A320')); // true
console.log(planes.includes('Boeing')); // false
console.log(planes.startsWith('A320')); // false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

//Practice exercise
const checkBaggage = function (str) {
  let itemsStr = str.toLowerCase();
  if (itemsStr.includes('knife') || itemsStr.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome Aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//+++Split and Join+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a+very+nice+string'.split('+')); //+ will have gone away.
console.log('Collins Adhola'.split(' ')); // "Collins","Adhola"

// Assign split items
const [firstName, lastName] = 'Collins Adhola'.split(' ');
console.log(lastName); // Adhola

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//Captilize -Practice while looping through names

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // First letter pushed in capital and rest joined as common
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join());
};

capitalizeName('collins othieno baker adhola');
capitalizeName('elvis orwa rogers adhola');

//+++++++++++++Padding++++++++++++
const message = 'Go to get 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));

console.log('Jonas'.padStart(20, '=').padEnd(40, '='));

//+++Mastercard pad example
const masterCreditCard = function (number) {
  const str = number + ''; // turns number to string . also String(masterCreditCard);
  const last = str.slice(-4); // get last 4 digits
  return last.padStart(str.length, '*');
};

console.log(masterCreditCard(64637836));
console.log(masterCreditCard(44437836677777));
console.log(masterCreditCard(646378368888888));

//+++++++++ Repeat++++++++++++++++++++++
const message2 = 'Bad weather....All Departures Delayed....\n';
console.log(message2.repeat(3));

//Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below)
//with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:

// 4. Loopover'gameEvents'andlogeachelementtotheconsole,marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽   GOAL

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = gameEvents.keys();
const values1 = gameEvents.values();
console.log(events);

// 2. After the game has finished,is was found that the yellow card from minute 64 was unfair.
//    So remove this event from the game events log.
console.log(gameEvents.delete(64));
console.log(events);

// 3. Compute and log the following string to the console:"An event happened,on average, every 9 minutes"
//     (keep in mind that a game has 90 minutes)

// 4. Loop over 'gameEvents'and log each element to the console,marking whether
//    it's in the first half or second half (after 45 min) of the game, like this:
//    [FIRST HALF] 17: ⚽   GOAL

for (const [timeScale, occured] of gameEvents) {
  if (timeScale <= 45) {
    console.log(`[FIRST HALF] ${timeScale} : ${occured}`);
  } else {
    console.log(`[SECOND HALF] ${timeScale} : ${occured}`);
  }
}

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
const nameCap = function(x){
  let h=[]
  
  for(const d of x){
    h.push(d);
    console.log(h)
   
    // const camFinal = d.replace([0], d.toUpperCase([0]))+ d.split(12);
    // console.log(camFinal)

  }

}
nameCap(events)
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs): underscoreCase ✅
// firstName ✅
// someVariable ✅
// calculateAge ✅
// delayedDeparture ✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data! GOOD LUCK 😀
//  ✅
//   ✅
// ✅
// ✅
//    ✅
// ✅
// ✅
//     ✅
// ✅
// ✅

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
