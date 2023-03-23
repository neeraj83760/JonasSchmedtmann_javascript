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
  
    openingHours,


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


//   this below line of code will give 'undefined' becasue the property openingHours.mon doesn't
//   exist ... so in the if condition we can check whether the respective property exists or not 
// using if condition we can get rid of 'undefined' error 

//   console.log(restaurant.openingHours.mon);  

  if(restaurant.openingHours.mon){

    console.log(restaurant.openingHours.mon.open);
  }

//   checking for every property in if condition in a deeply nested object is a quite cumbersome process
//   so in ES2020 we new feature called optional chaining  

// In optional chaining if certain property doesnt exisit we get 'undefined' immideately 

//  Lets see how optional chaining works : 'restaurant.openingHours.mon' is only work if .open exists 

console.log(restaurant.openingHours.mon?.open) 

console.log(restaurant.openingHours.mon?.open) 

console.log(restaurant.openingHours.mon?.open) 

// Example 

const days = ['mon','tue','wed','thru','fri','sat','sun']

for(const day of days)
{
   // if we use OR operator we will get an error: the resturant opens on saturday but it will give output
   // closed coz open property in openingHours Object is 0 because resturant opens 24 hours so 
   // OR operator consider 0 as false value and print the default value .... so the solution to this case is
   // using NullishColasching Operator 

    // const open = restaurant.openingHours[day]?.open || 'closed'
    
    // ***********This is an amazing usecase of nullcolasing and optional chaining operator 
    const open = restaurant.openingHours[day]?.open ?? 'closed'
    console.log(`On ${day}, we open at ${open}`);

}


// OPtional chaining does work with methods as well 

// if order function exist then print the respective values by passing 0,1 as an argument of the function  
console.log(restaurant.order?.(0, 1) ?? 'Method does not Exist')

console.log(restaurant.orderRissto?.(0, 1) ?? 'Method does not Exist')


// Optional chaining Even works with Arrays 

const users = [{name:'Henry', email:'neerajghildiyal@gmail.com'}]

// const users = [];

console.log(users[0]?.name ?? 'User Array Empty');