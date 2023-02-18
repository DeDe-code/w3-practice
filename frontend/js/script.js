const person1 = "Cyclops";
const person2 = "Princess Diana";
const numOfEyesOfFirst = 1;
const numOfEyesOfSecond = 2;

const joinedNames = person1 + person2; // It is your task to change '?' to valid code
const lengthOfJoinedNames = "?";
for (i = 0; i < joinedNames.length; i++) {
  // const joinedLength = joinedNames.length[i];
  console.log(joinedNames.length[i]);
}
const joinedNamesHasEvenCharacters = null; // it should be an expressions which gives true or false

const diffOfNumOfEyesIsLow = 0; // it should be true or false. Hint: Math.abs(x) can be used, but there are other solutions too

const mostLovedOnes = [
  "Princess Diana",
  "David Attenborough",
  "Rowan Atkinson",
  "David Beckham",
];
const person1IsPerfectToAnyone = null; // it should be true or false. Hint: you have learnt about a function which checks if an array includes an element
const person2IsPerfectToAnyone = null; // it should be true or false

// if (true) {
//   // final challenge: please code THE condition
//   console.log("❤️");
// } else {
//   console.log("😢");
// }

// let availablePlaces = [
//   "Galápagos Islands",
//   "Great Pyramid of Giza",
//   "Eiffel Tower",
//   "Great Wall of China",
//   "Trans Bhutan Trail",
//   "Colosseum of Rome",
//   "Great Smoky Mountains National Park",
// ];

// let favoritePlaces = [];

// function addFavoritePlaces(placeNames) {
//   if (!placeNames.includes("Great") === true) {
//     favoritePlaces.push(placeNames);
//   }
// }

// for (let place of availablePlaces) {
//   addFavoritePlaces(place);
// }

// function printFavoritePlaces() {
//   console.log("Favorite Places " + favoritePlaces.length);
//   for (i = 0; i < favoritePlaces.length; i++) {
//     let places = favoritePlaces[i];
//     console.log(places);
//   }
// }

// function planMyTrips() {
//   //do the selection
//   for (const place of availablePlaces) {
//     addFavoritePlaces(place);
//   }
//   //print the list
//   printFavoritePlaces();
// }

// planMyTrips();

// let favoriteBooks = [
//   {
//     title: "Öreg néne őzikéje",
//     author: "Fazekas Anna",
//     year: 1952,
//     isNewerThan2000: false,
//   },
//   {
//     title: "Szamárfül",
//     author: "Romhányi József",
//     year: 2003,
//     isNewerThan2000: true,
//   },
// ];

// let data = {
//   myFavoriteBooks: favoriteBooks,
//   isNeverThan: function (year, condition) {
//     return year >= condition;
//   },
// };

// for (const book of data.myFavoriteBooks) {
//   const bookTitle = book.title;
//   if (!data.isNeverThan(book.year, 2000)) {
//     console.log("This book is older than 2000" + bookTitle);
//   } else {
//     console.log(" This book is newer than 2000 " + bookTitle);
//   }
// }
// for (const book of favoriteBooks) {
//   console.log(book.title);
// }

// for (let i = 0; i < favoriteBooks.length; i++) {
//   console.log(favoriteBooks[i].author);
// }

// let bookTitle = favoriteBooks[0].title;
// let alert = "This book is older than 2000";

// if (favoriteBooks[0].isNewerThan2000 === true) {
//   console.log(" This book is newer than 2000 " + bookTitle);
// } else {
//   console.log(alert);
// }

// if (favoriteBooks[0].year >= 2000) {
//   console.log(bookTitle);
// } else {
//   console.log(alert);
// }

// let bookTitle2 = favoriteBooks[1].title;
// let alert2 = "This book is older than 2000" + bookTitle2;

// if (favoriteBooks[1].isNewerThan2000 === true) {
//   console.log(" This book is newer than 2000 " + bookTitle2);
// } else {
//   console.log(alert2);
// }

// if (favoriteBooks[1].year >= 2000) {
//   console.log(" This book is newer than 2000 " + bookTitle2);
// } else {
//   console.log(alert2);
// }
