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

  // Rest Operator has exactly same syntax like Spread operator but it does exactly oppsite to Spread operator

// Collect multiple elements and condense them into an array is what Rest operator do 
// Spread unpack the elements into and array Rest pack the elements in the array 


// First part is about destructuring :::: 

// Spread because on a right side of assignment operator 
const arr = [1,2, ...[3,4]]

// Rest because on the left side of assignment operator 
const [a,b, ...others] = [1,2,3,4,5];

console.log(a,b, others);

  const [pizza, risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

  console.log(pizza, risotto, otherFood); 

  // Rest Operators also worked in Objects

  const {sat, ...weekdays} = restaurant.openingHours;
  
  console.log(weekdays); 

// Second Part is about Functions 

const add = function(...numbers){

    let sum = 0;

    for(let i=0; i<numbers.length; i++)
    sum = sum + numbers[i];

    console.log(sum);

}

add(2,6);
add(4,5,2,55);
add(45, 11, 2, 5, 34 , 51, 40);

// More use of spread operator 

const x = [3, 111, 94];

add(...x); 

// 


restaurant.orderPizza('mushrooms','Onions', 'spinach');

// the below line of code will show paneer and an empty arry coz we have nothing to put in 
// in the rest array variable argument which is in orderPizza function
 
restaurant.orderPizza('paneer')

