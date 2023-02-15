
const countriesContainer = document.querySelector(".countries");

const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

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


  const renderErr = function(msg){

    countriesContainer.insertAdjacentText('beforeend', msg)
    countriesContainer.style.opacity = 1;

  }

  const whereAmI = async function () {
    try {
      // Geolocation
      const pos = await getPosition();
      const { latitude: lat, longitude: lng } = pos.coords;
      // Reverse geocoding
      const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
      if (!resGeo.ok) throw new Error('Problem getting location data');
      const dataGeo = await resGeo.json();
      // Country data
      const res = await fetch(
        `https://restcountries.com/v2/name/${dataGeo.country}`
      );
      if (!resGeo.ok) throw new Error('Problem getting country');
      const data = await res.json();
      renderCountry(data[1]);
      return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
      console.error(`${err} 💥`);
      renderError(`💥 ${err.message}`);
      // Reject promise returned from async function
      throw err;
    }
  };
  
/* Basic example of a async function if it retunrs a value

console.log('I will get a location')
const a = whereAmI(); // this async function will print in the last
console.log(a)// it will return a promise<pending>
*** whereAmI().then(city => console.log(city))****
console.log('Finsihing getting location')

*/
console.log('1: Will get location');
  // The below commented code is how we handle the returned values from the async function 

  // const city = whereAmI();
  // console.log(city);
  // whereAmI()
  //   .then(city => console.log(`2: ${city}`))
  //   .catch(err => console.error(`2: ${err.message} 💥`))
  //   .finally(() => console.log('3: Finished getting location'));

//   The below one is the correct way of returning the data from the async functions
// In real life senarios it happens always async function calling other async functions and returning the
// values in async way  
  (async function () {
    try {
      const city = await whereAmI();
      console.log(`2: ${city}`);
    } catch (err) {
      console.error(`2: ${err.message} 💥`);
    }
    console.log('3: Finished getting location');
  })();
  