'use strict'

const btn = document.querySelector('btn-country')
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();

// another name of URL is ENdpoint 
request.open('GET', 'https://restcountries.com/v3.1/name/india')

// Sending the request to the server
// we can't store the request.send() in a vairable coz it asyncronus coz we dont know
// how long will it take to get the data from the server 
// const data =  request.send()

// We simply write 

request.send(); // the send method emits the load event when we have the data from the server 

console.table(request.responseText) // this sometimes reponseText will not set the property because of 
// asynronus behaviour  

request.addEventListener('load', function(){

    console.table(this.responseText); // response is in the property called responseText when can 
    // set the values once we actually receive the data 

})



