const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
// Array of image file names (replace with the actual file names in your folder)
const imageSets = {
    // Landing page
    set0: [
        'IMG_7367.webp',
        'IMG_7390.webp',
        'IMG_7481.webp',
        'IMG_7495.webp'
    ],
    // Amarillo
    set1: [
        'amar/IMG_2426.webp',
        'amar/IMG_2432.webp',
        'amar/IMG_7436.webp'
    ],
    // Gainesville
    set2: [
        'gnv/floridagators.jpeg'
    ],
    // La Crosse
    set3: [
        'lax/IMG_1368.webp',
        'lax/IMG_7860.webp',
        'lax/IMG_7868.webp'
    ]
    
};
const images = [
    'IMG_7367.webp',
    'IMG_7390.webp',
    'IMG_7481.webp',
    'IMG_7495.webp'
];

$('#myCarousel').on('slide.bs.carousel', function (e) {
    $('.carousel-item img').each(function () {
      // Ensure styles are applied before the sliding starts
      $(this).css({
        'max-height': '100%',
        'max-width': '100%',
        'object-fit': 'contain',
        'margin': 'auto' // Ensure it's centered in its parent
      });
    });
  });

// Path to the folder containing the images
const imageFolder = 'images/';  // Adjust this to your folder structure

// Function to select a random image
function getRandomImage(path, names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return path + names[randomIndex];
}

const amarillo = document.getElementById('blog-image__container')

const containers = document.getElementsByClassName('main__img--container');

// Loop through all elements with the class 'container' and set their background
for (let i = 0; i < containers.length; i++) {
    containers[i].style.backgroundImage = `url(${getRandomImage(imageFolder, imageSets.set0)})`;
}
// Set the background image of the container
// document.getElementByClassName('main__img--container').style.backgroundImage = 'url(${getRandomImage()})';


/*menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})*/

function loadCarouselImages(images) {
    const indicators = document.querySelector('.carousel-indicators');
    const inner = document.querySelector('.carousel-inner');

    // Clear current carousel content
    indicators.innerHTML = '';
    inner.innerHTML = '';

    // Populate the carousel with new images
    images.forEach((image, index) => {
        // Create indicator
        const indicator = document.createElement('li');
        indicator.setAttribute('data-target', '#myCarousel');
        indicator.setAttribute('data-slide-to', index);
        if (index === 0) indicator.classList.add('active');
        indicators.appendChild(indicator);

        // Create carousel item
        const item = document.createElement('div');
        item.classList.add('item');
        if (index === 0) item.classList.add('active');
        const img = document.createElement('img');
        img.src = imageFolder + image;
        item.appendChild(img);
        inner.appendChild(item);
    });
    if (images.length == 1){
        document.getElementById('indics').style = 'display:none;';
        document.getElementById('leftc').style = 'display:none;';
        document.getElementById('rightc').style = 'display:none;';
    } else {
        document.getElementById('indics').style = 'display:block;';
        document.getElementById('leftc').style = 'display:block;';
        document.getElementById('rightc').style = 'display:block;';
    }

    // Show the carousel
    document.getElementById('myCarousel').style.display = 'block';
}

const button = document.querySelector('.main__btn');
const main = document.querySelector('.main');

button.addEventListener('click', function(){
    main.style.transition = 'opacity 1s';
    main.style.opacity = '0';
    setTimeout(function() {
        main.style.display = 'none';
        main.style.pointerEvents = 'none'; // Hide the div
    }, 1000);
})

document.getElementById('la-crosse').addEventListener('click', function() {
    document.getElementById('state-title').innerText = 'La Crosse';
    document.getElementById('state-description').innerText = 'I would be happy too if I had Sprechers. Painting your brewery\'s logo on existing beer tanks and then calling it the World\'s Largest Six Pack is genius. Once I\'m old enough that people are too nice to me to say no, I will put a giant aglet at the end of a transcontinental fiberoptic cable and call it the World\'s Largest Shoelace.';
    loadCarouselImages(imageSets.set3);
});

document.getElementById('amarillo').addEventListener('click', function() {
    document.getElementById('state-title').innerText = 'Amarillo';
    document.getElementById('state-description').innerText = 'This is the Texas that Hollywood sold me on. Not no damn metroplex. The belt buckles are the size of dog bowls and the asphalt sticks to your shoes under the sun at the rest stops. I remember my second time coming to Amarillo, I was driving around on a Saturday night, curious what the locals did for fun. I drove up the \"main street\" and saw a few gawkers watching a Charger do a burnout, but that was the extent of the action on what appeared to be the only real \"strip\" in town. Finally, I pulled into a local drive-in style restaurant near the edge of town and rolled down the window to order a corn dog when I heard music behind me. Looking through my rearview, I saw 2 men and 3 women, looking like they were dressed to go out, hopping out of a truck and walking toward the building it was coming from. Further investigation revealed that there was a line outside (the first traffic I had seen since Salt Lake City). There was a dedicated parking lot that looked to be about an acre large and almost at capacity, full of trucks whose owners had driven there and were presumably driving back. In the middle sat a detached, windowless concrete building. It didn\'t even show up on Google Maps. If you ever want to turn up in the panhandle, look for a monolith.';
    // document.getElementById('blog-writeup').src = getRandomImage(imageFolder + 'Amarillo/', Amarillo);
    loadCarouselImages(imageSets.set1);
});

document.getElementById('gainesville').addEventListener('click', function() {
    document.getElementById('state-title').innerText = 'Gainesville';
    document.getElementById('state-description').innerText = 'I\'m very glad the University of Florida is here and not somewhere that makes more sense. ';
    loadCarouselImages(imageSets.set2);
});

window.addEventListener('load', function() {
    document.querySelector('.main__content').style.opacity = '1'; // Fade in on load
});

// Add more event listeners for other places you've visited
