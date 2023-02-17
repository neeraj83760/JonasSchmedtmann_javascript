// In file : RunningPromisesinParellel.js we used all() method as a promise combinator to 
// run the promises in parallel .... now we will see more combinators 

// Other three combinators are : Race , allSettled , and Any 

// Promise.race() : it is also like other combinators which receievs array of promises ...it settles
// as soon as one of Input promises settles ...settle simply means value is available

// Promise.race() one returns one value , whichever settles first 

// In Promise.race() first settled promise wins the race 

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

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
  
      return response.json();
    });
  };

(async function(){

const  res = await Promise.race([

    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`)
  ]
)

console.log(res);
})();


// Promise.race() in this we only get one result whoever promise win the race, not the array of promises 
// Rejected promise can also win the race that's why we say Promise.race() sort curcuit whenever one
// of the promises get settled ..no matter wehter its fullfilled or rejected 


// *******VVVIMP point : In real world Promise.race() is very useful to prevent against never ending
// promises for also very long running promises ... for example if the user has a very bad internet
// connection then fetch() request in your application might take way to long so actally be useful 
// so we can create a special timeout promise which authmiatcally rejects up when certain amount
// of time passed 


const timeout = function(sec){
                      //  In the below passed function we entred "_" as a first parameter
                      //  Means we will reject not resolve hence we will ony pass "_" as
                      // a variable
    return new Promise(function(_, reject) {
     
        setTimeout(function() {

          reject(new Error('Request took too long!'))
          
        }, sec*1000);

    })

}


Promise.race([

  getJSON(`https://restcountries.com/v2/name/tanzania`),

  // the above network request should be fast enough so the it can complete before 0.1 seconds
  // otherwise it will timeout 
  timeout(1)



]).then(res => console.log(res[0]))
  .catch(err => console.error(err))







  // Promise.allSettlled() it takes an array of promises and it will simply return an array of
  // all the settled promises so again no matter if the promises got rejected or not.
  // It is similar to promise.all() in regard that it's also return an array of all the results
  // but the diffrence is promise.all() will sort curciut as soon as on promise rejects but
  // promise.allSettlled() will simply never short curcuits 


  Promise.allSettled([

    Promise.resolve('Sucess'),
    Promise.reject('Error'),
    Promise.resolve('Another Sucess !')
  ])
  .then(res => console.log(res))



  Promise.all([

    Promise.resolve('Sucess'),
    Promise.reject('Error'),
    Promise.resolve('Another Sucess !')
  ])
  .then(res => console.log(res))
  

  //  Promise.any()  ES2021 : this returns first fulfilled promise and ignore all rejected promises
  // Promise.any() is very similar to Promise.race() with the diffrence that rejected promises are
  // ignored therefore the result of promise.any() is always gonna be a fulfilled promise, unless
  // all of promises get reject 

  // VVVVIMP : Promise.all() and promise.race() are very IMP once which we use most of the time

  Promise.any([

    Promise.resolve('Sucess'),
    Promise.reject('Error'),
    Promise.resolve('Another Sucess !')
  ])
  .then(res => console.log(res))
  .then(err => console.error(err))