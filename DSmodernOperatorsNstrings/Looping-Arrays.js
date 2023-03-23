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


  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

  console.log(menu);

  for(item of menu){

    console.log(item);
  }

  for (item of menu.entries()){

    console.log(item);

  }
// The below for loop with destructuring array is looking more realistic menu 
  for (const [i , el] of menu.entries()){

    console.log(`${i + 1}: ${el}`);

  }

  

  // for of loop dont give the index, it only gives the value at that particular index
  // to get the index we need to write menu.entries()  


