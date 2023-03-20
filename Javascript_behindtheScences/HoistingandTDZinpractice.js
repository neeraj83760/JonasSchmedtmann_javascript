
// Variables 
// console.log(me);
// console.log(job);
// console.log(DOB);


var me = 'Neeraj'
let job = 'Student'
const DOB = 1990;

// functions 

// console.log(addDec(2,4));
// console.log(funcExpress(2,5));
// console.log(addArrow(2,7));

function addDec(a,b){

    return a + b ;
 
}


// this below function expression is kind of const variable too that is why we get an error
// if we try to access it before declaration 

// Even if we change the variable type of funcExpress to var stil we get an error but of diff type
// Error we will get is : funcExpress is not a function , because var keyword initalize the 
// variable with undefined so when we call a function like funcExpress() we get the 'funcExpress is not a function'
// Error 
const funcExpress = function(a, b){

    return a + b ; 

}

const addArrow = (a , b) =>{

    return a + b ;

}


// Example

if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){

    console.log('All products deleted!!')
}

// 

var x = 1;
let y = 2;
let z = 3;
//   x attach to window object so it becomes its property unlike other 2 y and z 
console.log(x === window.x)

console.log(y === window.y);

console.log(z === window.z)

