// Giving a project a sturucture called Architecture 

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

// Eventlistners inside the class is a big Pain so you will be binding this keyword all the time 
// while using event listeners ...otherwise many parts of your code is not gonna work 
// for example : "this.newWorkout" method call this keyword simply point to the form but that we just dont want
// most of these methods we want this keyword to still point the Object itself ..in our case it's "App" object
// which is this keyword which we pass inside the bind function 

class App {

    // We made map and mapEvent property private in the class 
     #map;
     #mapEvent;


    constructor(){
    //    this getPosition function immediately called when the page loads page invokes
    //    the constructor immedieately 
        this._getPosition();




        form.addEventListener('submit', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleElevationField);   
           
             
        

    }

    _getPosition(){

        if(navigator.geolocation){
            // Binding getPosition call to loadmap function with current object  
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function(){
                alert("Could not get your position!!");
            })
            
            }
    }

    _loadMap(position){

        const {latitude} = position.coords;
        const {longitude} = position.coords;
    
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        // console.log(latitude, longitude); 
        // console.log(position); 
        
    
        const coords = [latitude , longitude]
    //    second parameter is '13' which is zoom in value , like how much you would like to zoom it  

        console.log(this)
        this.#map = L.map('map').setView(coords, 13);
        // console.log(map); map is an inbulit function of L namespace 
    // Leaflet gives us L namesapce here having tilelayer, addTO, etc as a methods 
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);
    
    
        
        // mapEvent is created by leaftlet library itself. Handling clickson Map 
        this.#map.on('click', this._showForm.bind(this))
        }
    

    _showForm(mapE){

        this.#mapEvent = mapE;  
        form.classList.remove('hidden')
        inputDistance.focus();
    }

    _toggleElevationField(){


            // the below methods didnt used any this keyword in the below methods
            // so we dont need to bind the method with "inputType.addEventListener('change', this._toggleElevationField);" this line of code 
            // inside the constructor 
           
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden'); 
        
           

    }

    _newWorkout(e){

        e.preventDefault(); 
           
               //  Clear Input Fields 
           
               inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''; 

               // Display marker on the Map once user fill in the details on the left side of the 
               // form have distance workout data
           
                   const {lat, lng} = this.#mapEvent.latlng;
                   L.marker([lat ,lng]).addTo(this.#map)
                   .bindPopup(L.popup({
                       maxWidth:250,
                       minWidth:100,
                       autoClose:false,
                       closeOnClick:false,
                       className: 'running-popup'
                   })).setPopupContent('Workout')
                   .openPopup();    
               

    } 

}
    
const app = new App();

app._getPosition();

