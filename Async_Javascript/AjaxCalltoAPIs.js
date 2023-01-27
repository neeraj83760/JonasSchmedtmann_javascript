"use strict";

const btn = document.querySelector("btn-country");
const countriesContainer = document.querySelector(".countries");


const getCountryData = function (country) { 

const request = new XMLHttpRequest();

// another name of URL is ENdpoint
request.open("GET", `https://restcountries.com/v2/name/${country}`);

// Sending the request to the server
// we can't store the request.send() in a vairable coz it asyncronus coz we dont know
// how long will it take to get the data from the server
// const data =  request.send()

// We simply write

request.send(); // the send method emits the load event when we have the data from the server

//console.table(request.responseText) // this sometimes reponseText will not set the property because of
// asynronus behaviour

request.addEventListener("load", function () {
  // console.table(this.responseText); // response is in the property called responseText when can
  // set the values once we actually receive the data

  // as we got the data in console in an Array so we first need to destrcture it once by wrting const [data]

  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = `
    
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
    </article>
    `;


    countriesContainer.insertAdjacentHTML('beforeend', html);

    countriesContainer.style.opacity = 1 ;  
});

}

// below one is the two ajax calls happening on the same time so which ever loading first it's showing
// the data on the browser accordingly with the resective country flag ... if we want to the data should
// be shown in an specific manner then we need to chain the request 
getCountryData('usa');
getCountryData('nepal');
getCountryData('germany')