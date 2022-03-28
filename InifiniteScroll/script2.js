const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Script for calling Unsplash API
const count = 30; 
const apiKey = 'U69bY6BcEWQlsEzKNZJh8nBvffo8glxsPSAq9kw1eNA';
// "`" is used when we use ${} in the apiURLs
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images are loaded
function imageLoaded() 
{
    // console.log('Image Loaded');
    imagesLoaded++;
    // console.log('Images loaded');
    if(imagesLoaded === totalImages)
    {
        ready = true;
        loader.hidden = true;
        // console.log('ready =', ready);
    }
}

// helper function to set attributes on DOM Elements
function setAttributes(element, attributes){
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// creating function for links and photos to displayPhotos()
function displayPhotos()
{
    // run function for each object in photosArray
    photosArray.forEach((photo) => {

        // this sets the next 30 images back
        imagesLoaded = 0;
        totalImages = photosArray.length;
        // console.log('total images', totalImages);
        // creating anchor <a> element to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // setAttributes(item, {
        //     href: photo.links.html,
        //     target: '_blank',
        // });
        // setAttributes(img, {
        //     src: photo.urls.regular,
        //     alt: photo.alt_description,
        //     title: photo.alt_description,
        // });
        // create img for photo   
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        // alt atributes - these are dropped down from the console log info
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Event Listener check when image is finished loading
        img.addEventListener('load', imageLoaded);


        // put <img> inside <a>, then put them both in imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });

}


// Setting a fetch request function

async function getPhotos()
{
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        // function call to display Photos
        displayPhotos();
        //  console.log(photosArray);
    } catch (error) {
        //catch error
    }
}

//adding event listener to Check if the scroll is near end; load more photos
window.addEventListener('scroll', () => {
    // console.log('scrolled');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready)
    {
        ready = false;
        getPhotos();   
    } 
});

// on Load

getPhotos();