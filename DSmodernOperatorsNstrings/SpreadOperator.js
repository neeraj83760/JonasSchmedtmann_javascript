const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
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

    order : function(starterIndex, mainIndex){
    
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];  
    
      },

    orderDelivery : function({starterIndex = 1 , mainIndex = 0 , address, time = '20:00'}){
  
        console.log(`Order Received! ${this.starterMenu[starterIndex]}
                     and ${this.mainMenu[mainIndex]} will be delivered
                     to ${address} at ${time}             
        `);

    },
    // ing stands for ingridients 

    orderPasta: function(ing1,ing2,ing3 ){
   
        console.log(`Here is your delecious pasta with ${ing1} ${ing2} ${ing3}`);


    }
    
  };


// Real world example 
//   const ingridients = [prompt("Lets Make Pasta! Ingrident 1?"),
//                        prompt("Lets Make Pasta! Ingrident 2?"),
//                        prompt("Lets Make Pasta! Ingrident 3?")     
// ] 


//   restaurant.orderPasta(...ingridients); 

//   console.log(ingridients);



//   Objects 

const newResturant = {...restaurant, founder: 'Tim cook'}

console.log(newResturant);



const arr = [5,8,1]

const badNewArr = [11,2, arr[0], arr[1], arr[2]]

console.log(badNewArr);

const newArr = [11,2, ...arr]

console.log(newArr);

// We also add new values in existing arry

const newMenu = [...restaurant.mainMenu, 'Roti', 'sabzi'];

console.log(newMenu);

// Use cases of spread operator : create shallow copies of arrays and merge 2 arrays in one array

const mainMenuCopy = [...restaurant.mainMenu]

// Join 2 arrays together 

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(menu); 

//  ***********VVVVIMP point : spread opreator only work on iterables like string, arrays, sets, map, but NOT
// object coz Objects are not iterables 

const str = 'Neeraj'

const letters = [...str];

console.log(letters);

// Spread operator wont work on template literals example given below 

// console.log(`${...str} hi this is not allowed?`);  spread operator not allowed inside the template literals


// We can also create a shallow copy using spread operator

const resturantCopy = {...restaurant}

resturantCopy.name = 'Gattu Momos'

console.log(resturantCopy.name);

console.log(restaurant.name);
