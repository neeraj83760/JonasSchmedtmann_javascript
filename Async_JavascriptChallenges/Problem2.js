
//  How to promisify setting source Image of the the createImage function by setting src attribute
//  asyncornusly 

const createImage = function(imgPath){

return new Promise(function(resolve, reject){

    const image =  document.createElement('img');
   
    image.src = imgPath;

    image.style.border = "10px solid orange";
    image.style.borderRadius = "10px";

    image.style.width = "500px";
    image.style.height = "500px";
    image.style.objectFit = "cover";

    // document.body.appendChild(image)

    image.addEventListener('load', ()=>{

       document.body.appendChild(image)
       resolve(image); 

        
    })


    image.addEventListener('error', ()=>{ 
 
        reject(new Error('Unable to load an Image')); 
     })

})

}

const imgPath1 = "https://rb.gy/vjsfzh";
const imgPath = "/EventLoop/EventLoopImages/ScreenShot Tool -20230202061719.png"


const wait = function(seconds){
    
    return new Promise(function(resolve){
   
        setTimeout(resolve, seconds * 2000)

    })
}

let currentImg; 

createImage(imgPath).then(image => {
    currentImg = image; 
    console.log('Image 1 loaded')
    return wait(2);

} ).then(() => {

    currentImg.style.display = 'none';
   return createImage(imgPath1);
    }
).then(img => {
    currentImg = img; 
    console.log('Image 2 loaded')
    return wait(2);
     }).then(()=>{

        currentImg.style.display = 'none';
     }). catch(err => console.error(err)) 





