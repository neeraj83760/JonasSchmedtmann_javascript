/*
PART 1

Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only 
the part where the promise is consumed). Compare the two versions, think about the big differences, and 
see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2

1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).
TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/ 

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


     const loadPause = async function(imgPath){

      try {

        await createImage()
        
      } catch (err) {
        
      }

     }
     