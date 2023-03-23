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



/* 
Three Properties about logical operators

1:  they can use anydata type
2:  they can return any datatype
3:  they do short-curcuiting , or we also called it short Circuit Evaluation 

short-circuiting means : in the OR operator if the first value or operand is the truthy value it will 
immideately return the first value , second operand not even be evaluated means javascript not even
to look at it 

*/ 

console.log(3 || 'Jonas');

console.log('' || 'Jonas');

console.log(true || 0);

console.log(undefined || null ); // undefined is a falsy value 

// in the chain of OR operator the 'hello' is the first truthy value so it will short-circuit the 
// entire evaluation and print 'hello' as an output 

console.log(undefined || 0 || '' || 'Hello' || 23 || null); 


// Example of short-circuiting

restaurant.numGuests= 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests: 10;


console.log(guests1); // this will give the output 10 but if we write code like resturant.numGuests= 23 then
// we will get an output 23 

const guests2 = restaurant.numGuests || 10; 

console.log(guests2);


//  *********************** Let's discuss about AND operator ************************

console.log(0 && 'Jonas');

console.log(7 && 'Jonas');

console.log(undefined && 0 && '' && 'Hello' && 23 && null); 


// Practical Example 

if(restaurant.orderPizza){

  restaurant.orderPizza('Mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach'); //above if statement can also be written like this 

//  OR operator the first truthy value and simply the last value if all of them are falsy 

//  AND operator return first falsy value or the last value if all of them are truthy 









