'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  order : function(starterIndex, mainIndex){
  
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];  

  }

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
};


// Destructuring : it is a way of unpacking values from an Array or an Object into seprate variables 

// In other words destructuring means to break a complex data structure into an smaller data structure 

 let arr = [11, 34, 10];

 let a = arr[0];
 let b = arr[1];
 let c = arr[2];

 let [x,y,z] = arr; 

 console.log(x , y , z)

 const [first, second] = restaurant.categories;

 console.log(first , second); 

//  suppose we want to skip any one category from the catrgories array in the resturant object we 
// just need to add the blank element like mentioned below

let [first1, , second1] = restaurant.categories;

console.log(first1, second1);

// Switching variables in array destructuring ..it swaps the value without using any third variable 

[first1, second1] = [second1, first1];

console.log(first1,second1); 

// ********************

// console.log(restaurant.order(2,0)); we can also destructure this

const [starter, main] = restaurant.order(2,0);

console.log(starter , main); 


// Nested Destructuring 

const nested = [3, 4, [12, 2]]; 

const [i, , [j , k]] = nested;

console.log(i, j , k); 


// Default values : r will get undefined because value is not provided ...but we can also set 
// the default value 

const [p , q , r] = [8 ,9];

console.log(p , q , r);


const [s, t , u =2 ] = [23, 22]

console.log(s , t , u);
