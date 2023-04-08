const airline = 'TAP Air Portgual'

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


// Fix capitalization in name

const passenger = 'jOnas'

const passengerLower = passenger.toLowerCase();

console.log(passengerLower);

const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect);

// Comparing Emails 

const email = 'neerajkumarghildiyal@gmail.com';

const loginEmail = 'NEErajkumarGhildiyal@gmail.com   '

const normalizedEmail = loginEmail.toLowerCase();

console.log(normalizedEmail.length);

const FinalNormalizedEmail = normalizedEmail.trim()

console.log(FinalNormalizedEmail.length);

console.log(email === FinalNormalizedEmail);

// Replacing 

const priceGB = '288,97£';

const priceUS = priceGB.replace('£', '$').replace(',','.');

console.log(priceUS);


const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));

console.log(announcement.replaceAll('door', 'gate'));

// Boolean 

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Airb'));


// Exercise 

const checkBaggage = function(items){

    const baggage = items.toLowerCase();

    if(baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed on board !');
    else
    console.log('Welcome Onboard!!')

}


checkBaggage('I have a laptop and small knife');
checkBaggage('I have clothes and few books'); 


