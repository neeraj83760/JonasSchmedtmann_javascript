// Here we will take a lottry example which we took in while explaining what actaully the promise is
// Rejected promise : loose lottery ticket, accepted promise : win the lottery ticket

// We will Create a new promise using Promise constructor just like many other built in objects
// It also means Promises are special kind of object in javascript
// Promise constructor only takes one agrument that thats called executor function.. 
// As soon as promise Constructor runs it will execute the executor function 

// ***********VVIMP point : we only encapsulate any asyncronus behaviour 

const lotteryPromise = new Promise(function(resolve, reject){

// In lottery ticket we can loose 50% of time and win 50% of time so we will try to 
// simulate the same using random function



// without the settimeout function the lotteryPromise is not asyncronus yet
// Lets simulate lottery draw byadding simple timer
// the below timer will actully simulate the actaul time of buying the ticket and
// actully getting the result

console.log('Lottery Draw is happening!!')

setTimeout(() => {

    if(Math.random() >= 0.5){
        // To set a promise as fullfilled we use resolve function 
        // we pass the fullfilled value of the resolved promise in the resolve() function so that it can 
        // later be consumed by the then method
        resolve('You Win!!')
    }
    
    else{
    
        reject(new Error('You lost your money'))
    }
    
}, 2000);

})

// lotteryPormise is a Promise object as this point 
// resolve value will go in : res,  and reject value will go in : err 

lotteryPromise.then(res => console.log(res))
.catch(err => console.error(err));

// ************************Promisifying Definition*************************************

// Promisifying means : To convert callback based asyncronus behaviour to promise based. Lets see that in action


// Let promisfy the setTimeout function to a wait function : this is more real world problem 

// Just like fetch() function the below mentioned wait() function will also return the promise 
const wait = function(seconds){
    
    // We dont need reject function as a parameter in the below mentioned function because its impossible
    // for a timer to fail that iswhy we never mark this promise as rejected 
    return new Promise(function(resolve){
   
        setTimeout(resolve, seconds * 1000)

    })

}

wait(2).then(() => {

    console.log('I waited for 2 seconds!!')
    return wait(1);
}).then(() => console.log('I waited for 1 second!!'))


//  The diffrence between lotteryPromise function and Promise.resolve('abc').then(x=> console.log(x)), this kind of 
// resolve attached to Promise constructor directly , resolve the promise instantly without waiting for anything unlike
// the lotteryPromise promise we have created above.

// In the below lines of code resolve and reject are static methods in the Promise constructor which executes
// immideately unlike the above shared function which we have created above 
Promise.resolve('abc').then(x=> console.log(x));
Promise.reject('abc').catch(x=> console.error(x)); 