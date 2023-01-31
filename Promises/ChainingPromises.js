
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
  
    const getCountryData = function(country){

        // Country 1
        fetch(`https://restcountries.com/v2/name/${country}`)
          .then(response => response.json())
          .then(data => {
            renderCountry(data[0]);

            const neighbour = data[0].borders?.[0];
            if(!neighbour) return;


            // Country 2
            // Key point : then() method always returns the promise if we actually return anything
            // or not , but if we do return the value then that value become the fullfillment value
            // of the returned promise...like whatever data we get from the returned fetch function
            // it will become fullfilled value then function mentioned on line 21    
          return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)

        })
        .then(response => response.json())   // dont chain this then() function with the above returned fetch function ...
        //it will also work, but again it will create a callback hell which we are trying to avoid by
        // using promises ... so always remember this which chaining promises 
        .then(data => renderCountry(data, 'neighbour')) 
    }
        getCountryData('germany');
        
