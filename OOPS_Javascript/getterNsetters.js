
const account = {
    owner: "Jonas",
    movements: [20, 300, 250 , 70],

get latest(){

    return this.movements.slice(-1).pop();
},
// set excatly needs one parameter as an argument in the function  
set latest(mov){

this.movements.push(mov); 

}

};

// get function is very useful Whenever we want to read as a property but still need to do some calculations 
// before

console.log(account.latest);

account.latest = 50;

console.log(account.movements)