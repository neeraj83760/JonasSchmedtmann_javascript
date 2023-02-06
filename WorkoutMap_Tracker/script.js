'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// we used if condition for just to check wether navigator function exist or not in old browsers or not
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
    
    const {latitude} = position.coords;
    const {longitude} = position.coords;

    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    // console.log(latitude, longitude); 
    // console.log(position); 
    

    const coords = [latitude , longitude]
//    second parameter is '13' which is zoom in value , like how much you would like to zoom it  
    const map = L.map('map').setView(coords, 13);
    // console.log(map); map is an inbulit function of L namespace 
// Leaflet gives us L namesapce here having tilelayer, addTO, etc as a methods 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


    
    // mapEvent is created by leaftlet library itself 
    map.on('click', function(mapEvent){
        const {lat, lng} = mapEvent.latlng;
        L.marker([lat ,lng]).addTo(map)
        .bindPopup(L.popup({
            maxWidth:250,
            minWidth:100,
            autoClose:false,
            closeOnClick:false,
            className: 'running-popup'
        })).setPopupContent('Workout')
        .openPopup();    
    
    console.log(mapEvent)   

    })
    }, function(){
    
        alert("Could not get your position!!")
    })
    
    }
    