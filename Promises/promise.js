// The below two lines of code give return the promise in the console which is 
// stored in the request variable which we have created below 

const request = fetch('https://restcountries.com/v2/name/portugal')
console.log(request); 

// Promise : it's a container for an asyncronously delivered value or we can also called it
// a container for a future value 

// Perfect example of future value is : Response coming for an Ajax call,  so we use promise
// to handle this future value 

// Promise is kind of lottery ticket that I will get some amount of money if I guess the correct 
// outcome 

// 1) I buy a lottery ticket(promise) right now and wait till lottry draw happens asyncronously 
// 2) If I guess the correct outcome, I receive money, because it was promised 

// *************** Biggest Advatange of Using promises ************************

// 1} We no longer need to rely on events and callbacks passed into asyncronous functions
// to handle asyncronus results. 

// 2) Instead of nesting callbacks we can chain promises for a sequence of async operations: escaping callback hell




//  Key point : Promise only settled once its either fullfilled or rejected but later we can't
// change it's state

// When we use a promise is called we are consuming it : we consume a promise when we already have a 
// promise , for example the promise returned from the fetch function , the example code we have written above.

//  To consume it we need to first build the promise in our case "Fetch" is the function who build the
// promise and return it to consume 

// In the above fetch function we don't need to make the function in order to consume it 


















