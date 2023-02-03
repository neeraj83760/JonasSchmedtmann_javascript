
//  Example 1 to Simulate Microtask queue simulation 

// console.log('Test Start!!');

// setTimeout(() => console.log('O seconds Timer!!'), 0);

// // the below line of code helps us to build the promise which is immdeately resolved
// // One that immediately hasa success value , then fullfilled sucess value is which 
// // we have entered in the resolve function
// Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// console.log('Test End!!')

// ***********************Example 2 to Simulate Microtask queue sometimes cause starvation for callback queue
// because microtask has priority over callback queue *****************************

console.log('Test Start!!');

setTimeout(() => console.log('O seconds Timer!!'), 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));
Promise.resolve('Resolve Promise 2').then(res => {
    for (let i=0; i<1000000000;i++ ) {}
    console.log(res)
})
console.log('Test End!!')

