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

    }  
    
  };

  // Order delivery function shows that we even pass and object as an argument and later destructure it
  // where the fucntion definition is, also u dont even need to take care of the sequence of as we have
  // done in the code line no 29
  restaurant.orderDelivery({

    time: '22:30',
    address: 'DLF phase 3 U block',
    mainIndex: 2,
    starterIndex:3

  });

  restaurant.orderDelivery({

    
    address: 'DLF phase 3 U block',
    starterIndex:3

  });

  // TO destructure Objects we use curly braces 

  const {name, categories, openingHours} = restaurant;

  console.log(name, categories, openingHours);

  // we can also rename the key names as well 
  const {name: restaurantName , categories: tags, openingHours: hours } = restaurant;
  
  console.log(restaurantName, tags, openingHours);

  // We can also set the default values as well 
  // unlike the resturant object we dont have a hard coded data in the object we usually get the 
  // data from the API calls whicj we destructure it in the variables 

  const {menu = [], starterMenu: starters = []} = restaurant;

  console.log(menu, starters); 


  // Mutating variables : in order to desturcture below let a,b variables we need to pack thsese into round parenthesis 

  let a = 101
  let b = 201

  const obj = {a:23, b:22 , c:14}; 

  ({a, b} = obj);

  // we override the above a,b variables but for that we need to put them inside the round braces in case
  // object destructuring 
  console.log(a ,b);


  // ^^^^^^^^^^^^^^  Nested Objects ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


 const {fri : {open : o , close: c}} = openingHours;
 
 console.log(o, c);

