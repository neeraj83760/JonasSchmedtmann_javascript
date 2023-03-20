// Example no : 1 : for primitive values 

let lastName = 'Williams'

let oldLastName = lastName;

// After marriage spouse changed her lastname 
lastName = 'Davis'

console.log(lastName, oldLastName); 


// Example no : 2  for refrence types values 

const Jessica = {

    firstName: 'Jessical',
    lastName : 'Williams',
    age: 24
}

const marriedJessica = Jessica;

marriedJessica.lastName = 'Davis'

console.log('Before Marriage:', Jessica);

console.log('After Marriage:', marriedJessica);

// Copying objects 

const Jessica2 = {

    firstName: 'Jessical',
    lastName : 'Williams',
    age: 24
}

// Object.assign function will create a new copy of object in heap memory 
// Object.assign only create a shallow copy not the deep copy (copy everything) means in the object which we are copying
// is a nested object or object inside another object that it only copy the first level in the new 
// copy 

const JessicaCopy = Object.assign({}, Jessica2);

JessicaCopy.lastName = 'Marlo'

console.log('Before Marriage:', Jessica2);

console.log('After Marriage:', JessicaCopy);


//  Example 3: creating only shallow copy so the array will not be copied only 
// one centralized array will be there in an object in the heap and if we make any changes 
// even in the copied array it will reflected in both the objects coz deep clone is not 
// created yet 

// FOr deep cloning we use loadash library of javascript 

const Jessica3 = {

    firstName: 'Jessical',
    lastName : 'Williams',
    age: 24,

    family:['Alice', 'Bob', 'Peter']
}

const JessicaCopy2 = Object.assign({}, Jessica3);

JessicaCopy2.family.push('Marlo');

console.log('Before Marriage:', Jessica3);

console.log('After Marriage:', JessicaCopy2);


