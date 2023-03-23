const rest1 = {

    name:'Capri',
    // numGuests:20
    numGuests: 0


}

const rest2 = {
    name:'La Pizza',
    owner: 'Neeraj Ghildiyal'

}

// rest1.numGuests = rest1.numGuests || 10;

// rest2.numGuests = rest2.numGuests || 10; 

// The shortcut way of writing above two statements is the below two line of code 
// rest1.numGuests ||= 10;

// rest2.numGuests ||= 10; 

// nullish assignment operator 
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10; 

// console.log(rest1);
// console.log(rest2);

// AND assignment operators 

rest1.owner = rest1.owner && '<ANONYMOUS>' 

rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= '<ANONYMOUS>' 

rest2.owner &&= '<ANONYMOUS>' 

console.log(rest1);
console.log(rest2);










