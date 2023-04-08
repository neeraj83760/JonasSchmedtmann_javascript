
// Functions Returning Functions


// const greet = function (greeting) {
//     return function (name) {
//       console.log(`${greeting} ${name}`);
//     };
//   };
//   const greeterHey = greet('Hey');
//   greeterHey('Jonas');
//   greeterHey('Steven');
//   greet('Hello')('Jonas');


// function returning function using Arrow function 

const greet = greeting => name => console.log(`${greeting} brother ${name} `)

greet('Hey')('Sanju');

