
const renderCountry = function (data, className) {
    const html =
       `<article class="country ${className}">
     <img class="country__img" src="${data.flag}" />
     <div class="country__data">
       <h3 class="country__name">${data.name}</h3>
       <h4 class="country__region">${data.region}</h4>
       <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
       <p class="country__row"><span>🗣️</span>${data.languages.map(value => value.name).join(' and ')}</p>
       <p class="country__row"><span>💰</span>${data.currencies[0].name} / ${data.currencies[0].symbol ?? data.currencies[0].code} </p>
     </div>
    </article>`
    countriesContainer.insertAdjacentHTML("beforeend", html)
    countriesContainer.style.opacity = 1;
 }
  
 const whereAmI = function (lat, lng) {
    fetch(`https://opencage-geocoder.p.rapidapi.com/geocode/v1/json?key=OPENCAGE-API-Key&q=${lat}%2C+${lng}&language=en`, {
       "method": "GET",
       "headers": {
          "x-rapidapi-key": '620bcc8a5bmsh383c02733280845p1d17dejsnfe6b5ead6db4',
          "x-rapidapi-host": 'opencage-geocoder.p.rapidapi.com'
       }
    }).then(function (res) {
       if (!res.ok) throw new Error(`Problem with geocoding 💥💥💥 ${res.status}`);
       return res.json();
    }).then(data => {
       if (!data.results[0].components.country) throw new Error(`Country not found 💥💥💥 `);
  
       console.log(data);
       console.log(`You are in ${data.results[0].components.province ?? data.results[0].components.city}, ${data.results[0].components.country}`);
  
       return fetch(`https://restcountries.eu/rest/v2/alpha/${(data.results[0].components["ISO_3166-1_alpha-3"]).toLowerCase()}`);
    }).then(function (res) {
       console.log(res);
       if (!res.ok) throw new Error(`Country not found ${res.status}`)
       return res.json();
    })
       .then(data => {
          console.log(data);
          renderCountry(data)
       })
 }
 whereAmI(40.263, 29.016); //TURKEY
 whereAmI(19.037, 72.873); //INDIA
 whereAmI(-33.933, 18.474); //SOUTH AFRICA