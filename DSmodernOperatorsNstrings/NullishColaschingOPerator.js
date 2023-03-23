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
    
    orderPizza: function(mainIngridents, ...otherIngridents){

        console.log(mainIngridents);
        console.log(otherIngridents);

    }
    
  };


// Nullish Colasching operator introduce in ES2020
// Nullish values are 'null' and 'undefined'

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10; // the problem in this line of code is number of guests is 0 it will
// print 10 coz as per the shorcircut rule first truthy value will be printed 

console.log(guests);


// Nullish: null and undefined (NOT 0 or '' string)
// FOR nullish Colasching operator 0 and '' (empty string) is not a false values 
const guestCorrect = restaurant.numGuests ?? 10;

console.log(guestCorrect);