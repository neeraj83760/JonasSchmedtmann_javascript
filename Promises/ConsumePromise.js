// We will consume the promise return by the fetch function 

const request = fetch('https://restcountries.com/v2/name/portugal')
console.log(request);

//************The above code is complete */ 

// const getCountryData = function(country){
//     // On all promises we can call then method
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function(response){
//     console.log(response)   
//     })
// }

// getCountryData('portugal');

// *********************The above code is complete *******************************************

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
  
    countriesContainer.style.opacity = 1;
  };
  

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function(response){
//     // Json function are available to all the response objects coming from
//     // fetch function, to all of the resolved values , but the problem is that
//     // the json() function itself also an async function, that means it also 
//     // returns a new promise  
//     return response.json() // Here we are returing an new promise so now we need to handle this promise as well for that we need to call other than function   
//     }).then(function(data) {
     
//         console.log(data)
//         renderCountry(data[0])

//     })
// }

// *******Compiled version of above fetch function
const getCountryData = function(country){
fetch(`https://restcountries.com/v2/name/${country}`)
  .then(response => response.json())
  .then(data => renderCountry(data[0]))
}

getCountryData('portugal');


//  Wrap up :   Promises get rid of callback hell but didn't get rid of callbacks  