const resturant = new Map()

// set() is the method used in Map

resturant.set('name','Classico Itailiano');

resturant.set(1 ,'italy');
resturant.set(2, 'pourtgual');
resturant.set('categories', ['Italian', 'Pizza','Vegetarian'])
resturant.set('open',11);
resturant.set(true,'We are open');

console.log(resturant);

// get() is used to get the value as per the 

console.log(resturant.get('name'))
console.log(resturant.get(3));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      


// We can also chain the se function in Map method

resturant.set('categories', ['Italian', 'Pizza','Vegetarian'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are Open')
.set(false,'We are closed')

console.log(resturant.get('name'))
console.log(resturant.get(true))
console.log(resturant.get(1))


// More Example 

const time = 21;
// const time = 8 ;

console.log(resturant.get(time > resturant.get('open') && time < resturant.get('close')));


//  Map also has a has() method which tell wether there is the particlaur key exist on not in a MAP

console.log(resturant.has('categories'));

console.log(resturant.delete(1));

console.log(resturant.get(1));

// Map also has the size property 

console.log(resturant.size);

// We can also use Arrays and Objects as Map keys . Example given below 

resturant.set([1,2], 'Test');

console.log(resturant.get([1,2])); // this line of code will not give you an output : 'Test' 
// it will give you 'undefined' as an output,  why ? Answer is mentioned below

// both the arrays, [1,2 ] mentioned in set and get functions are not the same object in the heap, even they
// have written in the same way. so the solution to this problem is mentioned below:

const arr = [1,2];

resturant.set(arr, 'Test');

console.log(resturant.get(arr))

// We can also use the Map in Dom manuplation

resturant.set(document.querySelector('h1'), 'Heading');















