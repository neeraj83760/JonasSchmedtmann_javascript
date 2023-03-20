'use strict'

function calcAge(birthYear){

const age = 2023 - birthYear;

// console.log(firstName);

// return age; 

function printAge(){

    var example = 'apple'; 

    const output = `You are ${age} and your name is ${firstName} born in ${birthYear}`;
    console.log(this);
    console.log(output); 

    if(birthYear >= 1981 && birthYear <= 1996)
    {
        var millinieal = true;
        const str = `Oh, You are a millinieal, ${firstName}`;
        console.log(str);
    }

    // console.log(str);

    // VVVVVVIMP point :  variable defined as var are function scoped not the block scoped so we can access 
    // it outside the block like we have accessed millineal s
    console.log(millinieal);
}

printAge();

return age; 

}

//  variable declared using var keyword are function scoped thats why we are unable to access it outside
// the function 
console.log(example);

var lastName = 'Williams'
const firstName = 'Jonas';

calcAge(1990); 