// The below line of code is gelocation inbulit avaiable in almost all browsers u can check the same
// in the browser console.
// navigator.geolocation
// .getCurrentPosition(function(position){console.log(position)}, function(){alert("Cant show the Position!!")})

// Here we will promisify the geolocation API : it;s a callback based API we can also promisify it 

// navigator.geolocation.getCurrentPosition(position => console.log(position),
// err => console.error(err)
// )

// console.log('Getting Position');


// ******************** Let promisify the gelocation API *************************************

const getPosition = function(){

    return new Promise(function(resolve, reject){
     
        // navigator.geolocation.getCurrentPosition(position => resolve(position),
        // err => reject(err))

        // We can also write above commented code like

        navigator.geolocation.getCurrentPosition(resolve, reject); 

    })
}

getPosition().then(pos => console.log(pos))