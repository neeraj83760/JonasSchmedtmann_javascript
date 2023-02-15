// Lets Imagine we want the data of three countries at the same time, but in which the order the data arrives
// doesn't matter at all 

// lets create a function which takes three countries as an Input and log the capital cities of these three countries

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
  

const get3Countries = async function(c1, c2, c3){

    try {

    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);

    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

        // console.log([data1.capital, data2.capital, data3.capital]);

    // Above three [data1],[data2],[data3] promises are running in sequence u can check the 
    // same in the browser netwok tab that first we get the data for portugal country then 
    // for canada and then for tanzania ....but we want to run the promises in parallel so
    // that we can load the data at the same time and save the valuable loading time of the
    // browser, even we save 1s it's a lots of time we are saving of the browser while
    // loading the website ....


    // So Running promise in parellel we use promise combinator function like Promise.all()
    // so all() static method is a helper function on Promise constrcutor 
    
    
    // all() take arrays of promises and return a new promise which will then run all the promises in the
    // array at the same time 

const data = await Promise.all([ getJSON(`https://restcountries.com/v2/name/${c1}`),
                  getJSON(`https://restcountries.com/v2/name/${c2}`),
                  getJSON(`https://restcountries.com/v2/name/${c3}`)
                ])
   
    // console.log(data); 

    console.log(data.map(d => d[0].capital))
        
    } catch (err) {
        
        console.error(err);
    }
} 

// Key point : whenever u want to do multiple async operations at the same time and the operations
// are dependent on each other then u should always always run them in parallel like we have done above
// but if async opeartions are dependent then aviod to run them in parallel because if in case
// one promise fails the remaining promises will also fail 


get3Countries('portugal','canada', 'tanzania');