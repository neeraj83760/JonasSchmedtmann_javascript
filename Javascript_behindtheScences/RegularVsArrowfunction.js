'use strict'

//  Key point : Never use arrow function as a method also use a normal function expression 
var firstName = 'Sona'

const jonas = {
    firstName:'jonas',
    year:1990,

    calAge: function(){

        console.log(this);
        console.log(2023 - this.year);
    },


    // parent scope of the below greet method is global scope not the jonas object scope
    // arrow function hasn't has its own this keyword ..it uses this keyword from its 
    // surroundings ...or we can say from its parent this keyword and the parent scope
    // of the the greet method is the global scope ... jonas code block is not a 
    // code block its an object literal ..just the way we literally define objects 
    greet: () => 
    {
    console.log(this);    
    console.log(`Hey ${this.firstName}`)
    }

}

jonas.greet();

jonas.calAge();


//  Example no 2 ;

const Jonas2 = {


    firstName:'jonas',
    year:1990,

    calAge: function(){

        console.log(this);
        console.log(2023 - this.year);


        const self = this; 
        const isMillenial = function(){
        
        // console.log(this);    
        // console.log(this.year >= 1981 && this.year <= 1996)    
        
        // So by the scope chain the self is equal to outside this.. which will point to the outside
        // now self is getting refrence of the outside scope this which we used in the isMillineal() function
        // is in now   
         console.log(self);    
         console.log(self.year >= 1981 && self.year <= 1996)


        }
        // Inside the regular function call 'this' must be undefined so we get undefined if we write
        // console.log(this) inside the isMillenial() function so the solution for this problem is
        // declare a self variable outside the isMillenial() function 
        isMillenial();


        // The solution to the above isMillineal function problem is in ES6 .. we use arrow function 
        // because arrow function has not it's own this keyword ... but normal function has thats is
        // why we were getting an error this as undefined in the browser console 
        // Solution 2 
        
        // Here we just need to modify ismillinial2 function with arrow function so as we all know
        // arrow function inherits this from it's parent scope 

        const isMillenial2 = () => {
        
            console.log(this);    
            console.log(this.year >= 1981 && this.year <= 1996)    
            }
            
            isMillenial2();
        
    },

    greet: () => 
    {
    console.log(this);    
    console.log(`Hey ${this.firstName}`)
    }


}

Jonas2.calAge();


//  Example 3 

// ..argument keyword is only avialable in normal functions not it arrow function 

const addExpress = function(a ,b){
    
    console.log(arguments);
    return a + b; 

}

// addExpress(2, 6);
addExpress(3,5,6,8,12,90);

const addArrow = (a, b) => 
{
    console.log(arguments);
    return a + b 

}; 

addArrow(12,11);

