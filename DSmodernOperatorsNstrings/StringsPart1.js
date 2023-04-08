const airline = 'Tap Air India'
const plane = 'A320'

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])

console.log('Neeraj'[0]);

console.log(airline.length);
console.log('Neeraj'.length);


// like Arrays Strings also have methods
// below two methods are case senstive if try to find capital i you will not get the answer 
console.log(airline.indexOf('i')); // this gives first occurence of char i 

console.log(airline.lastIndexOf('i')) // this gives last occurence of i char

// if we know the string then we can extract the substring from it like example given below

console.log(airline.slice(4));
console.log(airline.slice(4,7));

// if we dont know the string then we need to take help of the functions like indexOf and lastindexOf

console.log(airline.slice(0, airline.indexOf(' ')))

console.log(airline.slice(airline.lastIndexOf(' ')+ 1))


// Checking middle seat in a Plane 


const checkMiddleSeat = function(seat){

    // Let assume B and E are the middle seats
    
    const s = seat.slice(-1);

    if(s === 'B' || s === 'E'){
   
        console.log('You got the Middle Seat!');

    }else console.log('You got lucky!')
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Keypoint : Whenever we call a method over a string javascript automatically behind the scences convert
// that string primitive to a string object with the same content and then on that object where the methods
// are called this process is called BOXING , because it basically takes our string and puts into a box 
// which is the object so basically what happens is this 

console.log(new String('Neeraj'))

console.log(typeof new String('Neeraj'))

// Behind the sences what conversion the javascript makes when we call a method over the string ? example
// given below ... and when the operation is done the object is converted into regular string primitive 









