
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


  // Promisifying Geolocation API 
  const getPosition = function(){

    return new Promise(function(resolve, reject){
     
        navigator.geolocation.getCurrentPosition(resolve, reject); 

    })
}

// Just an async keyword can make a function async which will keep running on the backgorund while
// performing the code inside of it and when the function is done it will automaticallly returns
// a promise  

// Inside one Async function there is one or more await statments we use await keyword then we write a promise
// returned from the fetch function 

// await will stop the code execution until the fetch function fullfilled the promise or we can say
// until the data is being fetched in this case.

// Quesition : Isn't blocking the code is stopping the execution? Answer: NO , because stop the execution in
// an Async function is not  a problem coz it's running in the background ...not blocking the main thread

// async await is a syntatical sugar over the then() function of the promise    

const whereAmI = async function(){
//******************* */ Geolocation
const pos = await getPosition();

const {latitude: lat, longitude: lng} = pos.coords;

//****************** */ reverse geocoding 
const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

const dataGeo = await resGeo.json()
console.log(dataGeo);

//******************** */ Country data
// fetch(`https://restcountries.com/v2/name/${country}`)
// .then(res => console.log(res));


// resolved value of promise will be stored in res variable 
 const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`)

//  console.log(res); 

const data = await res.json();
console.log(data); 
renderCountry(data[0])

}   

whereAmI();
console.log('First!!')

// Key Note : Async await is only about consuming promises the way we built them is not influenced in any way.

