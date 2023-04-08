// Keypoint : Javascript doesnot have passing by refrence, even though it looks
// like it passing by refrence , it only have passing by value unlike 
// the other programming languages like c, c++, where we can pass the value by refrence as well 

// We pass a refrence to a function in javascript but we do not pass by a refrence 

const flight = 'LH234'; // this is pass by value
const jonas = { // this is pass by reference in the checkIn() function as we studied in
    // javascript behind the scenes in lecture primitiveVsRefence types values 
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...

// const flightNum = flight;
// const passenger = jonas;

// We are manipulating the value of the passport and as we know that jonas is an object type not the 
// primitive type so that we are manipulating the actual object value which is on the heap memory 
// so the output will be 'Wrong Passport'

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);

checkIn(flight, jonas);



