
const weekdays = ['mon','tue','wed','thru','fri','sat','sun']

openingHours = {
// we destuctured the array
    
[weekdays[3]]: {
      open: 12,
      close: 22,
    },
[weekdays[4]]: {
      open: 11,
      close: 23,
    },
[weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    // Old way writing one object literal inside another one , openingHours: openingHours,

    // openingHours: openingHours,

   // Es6 first enhanced object literals are : you just need to write openingHours

    openingHours,

  // Es6 enhancement no 2 : we no longer need to create a property and then set it to a function expession 
  // means no need to write a function in  order : function(starterIndex, mainIndex) this way we can 
  // directly write order(starterIndex , mainIndex)  

    order(starterIndex, mainIndex){
    
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];  
    
      },

    orderDelivery({starterIndex = 1 , mainIndex = 0 , address, time = '20:00'}){
  
        console.log(`Order Received! ${this.starterMenu[starterIndex]}
                     and ${this.mainMenu[mainIndex]} will be delivered
                     to ${address} at ${time}             
        `);

    },
    
    orderPizza(mainIngridents, ...otherIngridents){

        console.log(mainIngridents);
        console.log(otherIngridents);

    }
    
  };

  
