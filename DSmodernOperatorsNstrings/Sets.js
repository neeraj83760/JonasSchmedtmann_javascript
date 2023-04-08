// Set is a datasturcture which do not contain any duplicate values 


const orderSet = new Set(['apple','mango','guava','mango','apple','apple']);

console.log(orderSet);

// Strings are also iterables

console.log(new Set('Neeraj'));

// We can also find the size of the set 

console.log(orderSet.size);

// has() is a method used in Set 

console.log(orderSet.has('anar'));
console.log(orderSet.has('apple'));

// We can also add element to a set 

orderSet.add('Orange');

console.log(orderSet);

// We can also delete an element from a set

orderSet.delete('apple');

console.log(orderSet);

// Key point : there are no Indexs in a set Unlike in arrays , also there is no way of getting value out of 
// a Set

// orderSet.clear()// it will delete all the values of the set 

console.log('After deleting the set values are ', orderSet);

// Sets are iterables so we can loop over them 

for(order of orderSet){

    console.log(order);
}

//

const staff = ['waiter','chef','waiter','manager','waiter','chef']

const staffUnique = new Set(staff);

console.log(staffUnique);

// VVIMP : Sets are not intended to replace arrays at all

