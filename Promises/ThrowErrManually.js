// Lets see how to handle error in Promises , means how to handle rejected promises

const btn = document.querySelector('.btn-country'); 
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
  
    // countriesContainer.style.opacity = 1;
  };
  
  const renderErr = function(msg){

    countriesContainer.insertAdjacentText('beforeend', msg)
    // countriesContainer.style.opacity = 1;

  }

 // The below menrioned getJSON function will return a Promise    
  const getJSON = function(url, errorMsg ='Something went wrong' ){

   return fetch(url).then(response => {
        if(!response.ok)
        throw new Error(`Country Not Found (${errorMsg})`)

        return response.json();
 
  })

  }


// *************  Keeping below mentioned commented code for the refrence ************************
//     const getCountryData = function(country){

//         // Country 1
//         fetch(`https://restcountries.com/v2/name/${country}`)
//           .then(response => {
//             console.log(response)
        
//             if(!response.ok)
//             throw new Error(`Country Not Found (${response.status})`)

//             return response.json()
//         })
//             // response.json(), /*err => alert(err)*/)

//           .then(data => {
//             renderCountry(data[0]);

//             // const neighbour = data[0].borders?.[0];
            
//             //What if we enter a random border country? then we again need to throw an error 
//              const neighbour = 'dsfefss' // of course this is not the neighbour country
            

//             if(!neighbour) return;
//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)

//         })
//         .then(response => {

//             if(!response.ok)
//             throw new Error(`Country Not Found (${response.status})`)

//             return response.json()
//         })  
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {console.log(`${err} personalized Err`);
//                       renderErr(`Something Went Wrong!! ${err.message}. Try Again!`); 
//         })
//         // finally works because catch itself returns a promise 
//         .finally(() => {
//             countriesContainer.style.opacity = 1;

//         }) 
//     }
       
    
//     btn.addEventListener('click', function(){
   
//         getCountryData('germany');
//     })
    

//   // the below one line of code gives us an error on browser : can't read property 'flag' of undefined.  but 
//   // the actaul erro is the country we have entered in the function doesn't exist .....that we will check in
//   // next lecture ..... system jo error de raha hai that's make no sense so hume error throw karna hoga 
//   // end user ko taaki wo usse samajh sake      
//    getCountryData('dfddfdf')


// ***********************Above Code is Complete **********************************


const getCountryData = function(country) {

// country 

getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
       .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];
            // const neighbour = 'desghf'
            // console.log(neighbour); 

        if(!neighbour) throw new Error('No neighbour found!!');
        
        // Country 2

        return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');

        })
.then(data => renderCountry(data, 'neighbour'))
        .catch(err => {console.log(`${err} personalized Err`);
                      renderErr(`Something Went Wrong!! ${err.message}. Try Again!`); 
        })
        // finally works because catch itself returns a promise 
        .finally(() => {
            countriesContainer.style.opacity = 1;

        }) 
    }



    btn.addEventListener('click', function(){
   
    getCountryData('portugal')
    })


    getCountryData('australia');