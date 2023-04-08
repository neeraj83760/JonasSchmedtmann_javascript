const weekdays = ['mon','tue','wed','thru','fri','sat','sun']

openingHours = {
// we destructured the array
    
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


// New way of setting values in a MAP

const question = new Map([

    ['question','What is the best programming language in the World?'],
    [1, 'C'],
    [2,  'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'Try Again']

])

console.log(question);

// Convert Object to Maps 

console.log(Object.entries(openingHours));

// When u already have a Object and u need a Map the below line of code will help u in this conversion  
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Iteration on Maps : Maps are Iterable 
// Key point : Objects are not iterable so make them Iterable we use Object.entries() method 

// QUIZ APP 
console.log(question.get('question'))
for(const [key, value] of  question){

    if(typeof key === 'number')

    console.log(`Answer ${key}: ${value}`)

}

const Answer = Number ( prompt('Your Answer'))

console.log(Answer);

console.log(question.get(question.get('correct') === Answer))

//  Convert Map to an Array 

console.log([...question])

// console.log([...question.keys()])

// console.log([...question.values()])

