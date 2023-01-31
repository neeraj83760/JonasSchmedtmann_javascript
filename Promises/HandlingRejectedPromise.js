// Lets see how to handle error in Promises , means how to handle rejected promises


const btn = document.querySelector('.btn-country'); 
const countriesContainer = document.querySelector(".countries");


const renderCountry = function (data, className = "") {
    const html = `
      
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
    </article>
    `;
  
    countriesContainer.insertAdjacentHTML("beforeend", html);
  
    // countriesContainer.style.opacity = 1;
  };
  
  const renderErr = function(msg){

    countriesContainer.insertAdjacentText('beforeend', msg)
    // countriesContainer.style.opacity = 1;

  }

   // Key point : then() function is only called when promise got fulfilled and catch() function
   // is only called with the promise got rejected. finally() function run wether always 
   //  wether promise fulfilled or rejected 

   // Practical example of using finally function is : hiding the loading spinner that we on every 
   // web appication when we load some data 
   // These web apps shows spinner when app starts loading on web browser and then hide it when operation
   // complete, that happens wehter operation is sucessful or not .... jo kaam hona hi hona hai no matter
  //  app load kare ya na kare ...use finally function me daal do like in our case :     countriesContainer.style.opacity = 1;

  //    There are two ways of handling rejected promises first is passing a callback function in then() function
  //    Best way to catch a an error is : Rather than passing it into the then function u can simply chain it with
  //    it like mentioned below:  
    const getCountryData = function(country){

        // Country 1
        fetch(`https://restcountries.com/v2/name/${country}`)
          .then(response => response.json(), /*err => alert(err)*/)
          .then(data => {
            renderCountry(data[0]);

            const neighbour = data[0].borders?.[0];
            if(!neighbour) return;
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)

        })
        .then(response => response.json())  
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {console.log(`${err} personalized Err`);
                      renderErr(`Something Went Wrong!! ${err.message}. Try Again!`); 
        })
        // finally works because catch itself returns a promise 
        .finally(() => {
            countriesContainer.style.opacity = 1;

        }) 
    }
       
    
    btn.addEventListener('click', function(){
   
        getCountryData('germany');
    })
    

  // the below one line of code gives us an error on browser : can't read property 'flag' of undefined.  but 
  // the actaul erro is the country we have entered in the function doesn't exist .....that we will check in
  // next lecture ..... system jo error de raha hai that's make no sense so hume error throw karna hoga 
  // end user ko taaki wo usse samajh sake      
   getCountryData('dfddfdf')


