
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

  // next line of code Does NOT work and give an error 
// book(23, 'Sarah Williams');  

/* above line of code will not work because VVVVVVVIMP point : before mentioning this imp point I would like to share with you that
 we first need to go through how 'this' keyword works which is defined in the javascript 
 behind the scenes ... so the question is 
 How do we tell javascript we want to create a booking on new eurowings airlines or even 
 how do we tell it we want to book on lufthansa airline ... also we need to tell javascript explictly
 what the this keyword should be like so if u want a book a luftansa filght the this keyword 
 should point to Lufthansa but if we want to book eurowings flight this point to eurowings 

 So how we tell js explictly that what the this keyword should look like so there are three function methods
 to do that , call, apply , bind 

 */

 // So the solution of the above problem is using call method : remember function is just an 
 // object and object have methods so therefore functions have methods too and call method is one of
 // them

 const book = lufthansa.book;

 // first argument is : what we want this keyword point to 
 // Here we have not called the book function ourselves instead we called a call method and 
 // call function called the book function with the this keyword set to eurowings 
 // means we can manually set the this keyword using call method     
 book.call(eurowings, 23, 'Sarah Williams')

 console.log(eurowings);

 book.call(lufthansa, 32, 'Mary Cooper')

console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
  };

// Apply method: it works same like call method but it does not receive a list of aruguments 
// unlike the call method but recives an array of arguments

const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);

console.log(swiss);

// In mordern javascript we dont used apply() method instead we keep on using the call method 
// and use spread opreator for an Array of arguments 

book.call(swiss, ...flightData)
