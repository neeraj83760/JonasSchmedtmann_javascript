// All JavaScript values, except primitives, are objects.
// A primitive value is a value that has no properties or methods.

/*

Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

*/

// primitive values example 

let x = 23; // stored in callstack 

// refrence type values stored in heap memory because objects might be too large
// to be stored in the callstack  

let jonas = {

    Age: 23,
    Subject: 'Maths'
}

// Key point : its a misconception that all the variable decared as const are immutable in fact its only
// true for primitive values ... u can check the images attached as well for more details. 