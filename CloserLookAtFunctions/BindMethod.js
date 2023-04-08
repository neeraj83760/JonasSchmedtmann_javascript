const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    // book: function() {}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };
  lufthansa.book(239, 'Jonas Schmedtmann');
  lufthansa.book(635, 'John Smith');


  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };

  const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
  };


// Bind method just bind the method with the object but not call the function immdeately 
// We can call the function later whenver required 

// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const book = lufthansa.book;

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

// preset the flight number 23 value in the bind function 

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');


// Bind method is also useful for eventlisteners as well 

// lets add a new property to the lufthansa object 

lufthansa.planes = 300; 

lufthansa.buyPlane = function(){

    console.log(this);
    this.planes++;
    console.log(this.planes); 
}

// lufthansa.buyPlane();

// Once we will click on the button we will get the button element 
// coz we have attached eventlistner to a button so 'this' inside the buyPlane() function
// will point to a button element ... it shows that this keyword really set dynamically becoz
// if we simply call lufthansa.buyPlane() then this keyword will point to the lufthansa object 
// coz object calling the function  
  
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane);

// If we want this keyword point to lufthansa object the we need to modify the addEventListener 
// 2nd argument by attaching the bind function coz we know bind return a new function 

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// We also use bind method for partial application 
// partial application means that we can preset parameters 

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const addVat = addTax.bind(null, 0.23);
// above line of code is similar to  addVAT = value => value + value * 0.23; 

console.log(addVat(100))


// In the below lines of code I have tried to make a addVat function using functionreturningfunction
// concept but thats not the correct solution 

// const addTax1 = function(rate, value){

//   console.log(value + value * rate);

//   return function(){

//   console.log (value = value + value * 0.23)

//   }
// }

// console.log(addTax1(0.1, 200)())


// *******************Exact solution is given below **********************

const addTaxRate = function(rate){

  return function(value){

    return value + value * rate; 
  }


}

const addVAT = addTaxRate(0.23);

console.log(addVAT(200))










