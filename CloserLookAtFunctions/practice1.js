const p = function a(){

    let a = 2;

    console.log(2)
}


console.log(p());

function Student(name, age){

    this.age = age;
    this.name = name;

    this.greetings = function(){

        console.log(`Hey ${this.name}!`)

    }
}

let stu1 = new Student('Sanjay', 23);

let stu2 = new Student('Rahul', 12);

console.log(stu1);

Object.prototype.greet = function(name){

    console.log(`Hey ${name}!`);

}

stu1.greetings();



const Jessica = {

    firstName: 'Jessical',
    lastName : 'Williams',
    age: 24,

    FavBooks : ['Harry Porter','Atomic Habits', 'Rework'] 
}

const marriedJessica = Jessica;

marriedJessica.lastName = 'Davis'

console.log('Before Marriage:', Jessica);

console.log('After Marriage:', marriedJessica);


const jessCopy = Object.assign({}, Jessica);

console.log(jessCopy);

jessCopy.FavBooks.push('Freedom from unknown'); 

console.log(jessCopy);

console.log(Jessica);


