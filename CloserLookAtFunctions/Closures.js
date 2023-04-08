// Closures have priorty over scope 
// Key point : we dont need to return a function to see a closure in action , examples given below 

// Example no - 1 

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

// let insideG = g();
// console.log(insideG);
g(); // g function's execution is end here still in the next line of code where we calling f() will retain 
//the value of variable a 
f();


// let reassign the variable f to check which surrounding value will be retained by the f 

const h = function () {
    const b = 777;
    f = function () {
      console.log(b * 2);
    };
  };

  h();
  f();
 // dir() function displays an interative list of the properties of the specified javascript Object 
  console.dir(f)




// Example 2

const boardPassengers = function(n, wait){

    // const perGroup = n / 3;
    
    setTimeout(function(){
   
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);

    }, wait * 1000);
    
    console.log(`Will start boarding in ${wait} seconds`);

}

// the below line of code shows closures have priority over scope , to check this we also need to comment
// the 41 line of code const perGroup = n / 3; As soon as we un comment perGroup = n / 3 the function 
// will look the perGroup value which is inside the function not to outer once 
perGroup = 1000; 

boardPassengers(180, 3);
