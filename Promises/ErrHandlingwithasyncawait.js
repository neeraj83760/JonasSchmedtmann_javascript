// We cant use catch method with async await because we cant attach it to await method unlike in then() function
// we use to attach the catch function 

// In reverse Geocoding we will get an error 403 which we regarding : how many requests we can
// make per second to reverse geocoding API( https://geocode.xyz) if we refresh the page very quick...if we refersh the page
// very qick we will get 403 error which we need to handle in try catch block ...it's an improvment on 
// project we have created in file "ConsumePromiseAsyncAwait.js" 

//  Pehla question : Hum catch kyu karte hai error ko? agar hum const x =1, x=2 kare to
// error "assigment to const variable" ka system error aayega browser console me, but us 
// err ko hum catch (catch(err) alert(err.message) every eror has a message property ) kare to hum user ko show bhi kar sakete hai alert me ki usne kya err ki hai


 // <article class="country ${className}">
// ***VVVVVVIMP : Error handling is majorly required when u deal with asyncronus code********************

const countriesContainer = document.querySelector(".countries");
const btn = document.querySelector('.btn-country');


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


  // Promisifying Geolocation API 
  const getPosition = function(){

    return new Promise(function(resolve, reject){
     
        navigator.geolocation.getCurrentPosition(resolve, reject); 

    })
}

const whereAmI = async function(){

    try{
    //******************* */ Geolocation
const pos = await getPosition();

const {latitude: lat, longitude: lng} = pos.coords;

//****************** */ reverse geocoding 
const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

if(!resGeo.ok) throw new Error('Problem getting location DATA!!');

const dataGeo = await resGeo.json()
console.log(dataGeo, 'got data after reverse geocoding' );

//******************** */ Country data
// fetch(`https://restcountries.com/v2/name/${country}`)
// .then(res => console.log(res));


// resolved value of promise will be stored in res variable 
 const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);

//  console.log(res) ...res also has the "ok" propertry which we can check in if statment; 
if(!res.ok) throw new Error('Problem getting country!!')

const data = await res.json();
console.log(data, 'got country location data');
// data[1] isliye likha kyonki data[0] me koi aur country hai na ki India  
renderCountry(data[1]); 
    }catch(err) {
                //  console.error(`${err} !!`);
                 renderErr(`${err.message} Try Again!`);}

}   

btn.addEventListener('click', 
whereAmI)

console.log('First!!')




