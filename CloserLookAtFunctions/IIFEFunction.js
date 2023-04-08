// Sometimes we need a function in javascript which only executed once then never again 
// basically a function disappears right after it called once 
// We need these kind of functions in Async javascript 

const runOnce = function(){

    console.log('This will never run again!!');

}

runOnce(); // However we can run this function again by just calling it again 

// so the right way of creating a IIFE (immideately invoked function expression) function is : function expression + immideately call 

(function(){

    console.log('This will never run again!!');

})();

// IIFE also works with arrow function 

(() => console.log('This will never run again!!'))();

// WHY IIFE INvented ? 

// The Answer is : As we know that function create scopes and what is important here is that
// one scope doesnot have an access to variables from inner scope ... as we know scope chain 
// works other way around from inner to outer obove the herracy 
// So we also say that all data defined inside a scope is private or data is encapsulated 
// that is why IIFE functions invented 




