"use strict";

const btn = document.querySelector("btn-country");
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

const getCountryAndNeighbour = function (country) {
  //  Ajax call country 1

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

    // Render country 1
    renderCountry(data);

    // Lets get the neighbour country which is country 2

    const neighbour = data.borders?.[0];
    // Some countries don't have any neighbour at all
    if (!neighbour) return;

    // But if neighbour exiest we  will make second ajax call : second ajax call

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      // this time we will not destructure data2 like [data2] because we are seraching for
      // country codes (which are unique and not in an array so no need to destructure) not the country names like the
      // previous one
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};

// below one is the two ajax calls happening on the same time so which ever loading first it's showing
// the data on the browser accordingly with the resective country flag ... if we want to the data should
// be shown in an specific manner then we need to chain the request

// getCountryAndNeighbour('portugal')

getCountryAndNeighbour("usa");



// CallbackHell : when we have a lot of nested callbacks in order to execute async task in sequeunce
// this happens to all the async tasks which are handled by callbacks not just Ajax calls for example

setTimeout(() => {
  console.log("1 second passed!!");

  setTimeout(() => {
    console.log("2 second passed!!");

    setTimeout(() => {
      console.log("3 second passed!!");

      setTimeout(() => {
        console.log("4 second passed!!");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);