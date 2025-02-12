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
        'amar/IMG_2422.mp4',
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
    ],
    // Tucson
    set4: [
        'tusc/taco.webp',
        'tusc/IMG_7312.webp',
        'tusc/IMG_7330.webp',
        //'tusc/IMG_7347.webp',
        'tusc/IMG_7307.webp',
        'tusc/macaroons.webp'
    ],

    // Keys
    set5: [
        'keys/698E1DDA-1951-4C6E-9B74-1A6BF76A0F10.mp4',
        'keys/IMG_0987.webp',
        'keys/IMG_0761.mp4',
        'keys/IMG_0747.webp',
        'keys/IMG_0989.webp',
        'keys/filtered-62C98421-1252-4C1F-BD8C-4964543F9C92.mp4',
        'keys/IMG_0751.webp',
        'keys/IMG_0753.webp',
        'keys/IMG_0985.webp',
        'keys/IMG_0986.webp',
    ],

    set6: [
        'bre/IMG_2318.mp4',
        'bre/IMG_2319.webp',
        'bre/IMG_2321.webp',
        'bre/IMG_2329.mp4',
        'bre/IMG_2331.mp4',
        'bre/IMG_1844.webp',
    ]
    
    
};
const images = [
    'IMG_7367.webp',
    'IMG_7390.webp',
    'IMG_7481.webp',
    'IMG_7495.webp'
];


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

    indicators.innerHTML = '';
    inner.innerHTML = '';

    images.forEach((file, index) => {
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

        // Add loading placeholder
        const placeholder = document.createElement('div');
        placeholder.classList.add('loading-placeholder');
        placeholder.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #f3f4f6;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
        `;
        placeholder.textContent = 'Loading...';
        item.appendChild(placeholder);

        if (file.toLowerCase().endsWith('.mp4')) {
            const video = document.createElement('video');
            

            // Optimize video loading
            video.preload = 'metadata';
            video.setAttribute('fetchpriority', 'high');
            
            // Add loading states
            video.style.opacity = '0';
            video.style.transition = 'opacity 0.3s';
            
            // Set all attributes at once
            Object.assign(video, {
                autoplay: true,
                muted: true,
                playsinline: true,
                loop: true,
                defaultMuted: true,
                className: 'img-responsive center-block'
            });

            // Use source tag instead of direct src
            const source = document.createElement('source');
            source.src = imageFolder + file;
            source.type = 'video/mp4';
            video.appendChild(source);

            // Loading events
            video.addEventListener('loadstart', () => {
                placeholder.style.display = 'flex';
            });

            video.addEventListener('canplay', () => {
                video.style.opacity = '1';
                placeholder.style.display = 'none';
                video.play().catch(err => console.log('Autoplay prevented:', err));
            });

            video.addEventListener('error', (e) => {
                console.error('Video loading error:', e);
                placeholder.textContent = 'Error loading video';
            });

            item.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s';
            img.classList.add('img-responsive', 'center-block');
            
            img.onload = () => {
                img.style.opacity = '1';
                placeholder.style.display = 'none';
            };

            img.onerror = () => {
                placeholder.textContent = 'Error loading image';
            };

            img.src = imageFolder + file;
            item.appendChild(img);
        }

        inner.appendChild(item);
    });

    // Hide controls if there's only one file
    ['indics', 'leftc', 'rightc'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = images.length === 1 ? 'none' : 'block';
        }
    });

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
    document.getElementById('state-title').innerText = 'La Crosse, WI';
    document.getElementById('state-description').innerText = 'I would be happy too if I had Sprecher\'s. Painting your brewery\'s logo on existing beer tanks and then calling it the World\'s Largest Six Pack is genius. Once I\'m old enough that people are too nice to me to say no, I will put a giant aglet at the end of a transcontinental fiberoptic cable and call it the World\'s Largest Shoelace.';
    loadCarouselImages(imageSets.set3);
});

document.getElementById('amarillo').addEventListener('click', function() {
    document.getElementById('state-title').innerText = 'Amarillo, TX';
    document.getElementById('state-description').innerText = 'This is the Texas that Hollywood sold me on. Not no damn metroplex. The belt buckles are the size of dog bowls and the asphalt sticks to your shoes under the sun at the rest stops. I remember my second time coming to Amarillo, I was driving around on a Saturday night, curious what the locals did for fun. I drove up the \"main street\" and saw a few gawkers watching a Charger do a burnout, but that was the extent of the action on what appeared to be the only real \"strip\" in town. Finally, I pulled into a local drive-in style restaurant near the edge of town and rolled down the window to order a corn dog when I heard music behind me. Looking through my rearview, I saw 2 men and 3 women, looking like they were dressed to go out, hopping out of a truck and walking toward the building it was coming from. Further investigation revealed that there was a line outside (the first traffic I had seen since Salt Lake City). There was a dedicated parking lot that looked to be about an acre large and almost at capacity, full of trucks whose owners had driven there and were presumably driving back. In the middle sat a detached, windowless concrete building. It didn\'t even show up on Google Maps. If you want to turn up in the panhandle, look for a monolith.';
    // document.getElementById('blog-writeup').src = getRandomImage(imageFolder + 'Amarillo/', Amarillo);
    loadCarouselImages(imageSets.set1);
});

document.getElementById('gainesville').addEventListener('click', function() {
    document.getElementById('state-title').innerText = 'Gainesville, FL';
    document.getElementById('state-description').innerText = 'I\'m glad the University of Florida is here and not somewhere that makes more sense. ';
    loadCarouselImages(imageSets.set2);
});

document.getElementById('tucson').addEventListener('click', function() {
    document.getElementById('state-title').innerText = 'Tucson, AZ';
    document.getElementById('state-description').innerText = 'As I read about Tucson on my drive there, I found several sources claiming that it was both a city and a college town. I got a chance to stress test this by going there when all of the college students were home for winter break. But college towns, in my experience, are set apart as much by the character of the townies as by that of the students, from the unbelievably generous F-250 tailgate commandos to the cult members to the faces you see on campus police sketches produced when a student gets robbed. University of Arizona students call their townies \"t-locs\" and they have the same type of concentrated eccentricity that I have come to expect from places like Gainesville or Eugene. \n \n The real reason I stopped in Tucson was because it was December 31st, and I had seen on Instagram that they drop a giant Taco Bell taco for New Year\'s Eve instead of a ball (big enough to get corporate sponsorships for their eccentricities, I guess). But the image displayed here is actually not mine. I was misled by my Uber driver and ended up at a French revolution-themed event at a hotel 2 blocks away instead, then got too comfy with a group of t-locs I met before I realized my mistake. I\'m not sure if it\'s snobby of me to have passed up something eccentric like that for bottomless champagne and macaroons or down to earth to have skipped it for the company. I just wish I still had the video of the guillotines dropping at midnight.';
    loadCarouselImages(imageSets.set4);
});

document.getElementById('keys').addEventListener('click', function() {
    document.getElementById('state-title').innerText = 'The Florida Keys';
    document.getElementById('state-description').innerText = 'The initial drive out to Bahia Honda Key, where my friend Canek and I camped, was easily the nicest drive I\’ve done on in the state of Florida. The scenery slowly transitions from the towns, like Homestead and Florida City, that are still (somehow) technically in Miami-Dade County to endless swampland that grows more and more sparse, until finally you\’re out over the turquoise blue water of the Strait of Florida. We found one of my dad\’s old reggae CDs in the trunk and popped it in. \n \n The sun was setting for what felt like an hour, and as it grew darker, the light from the Miami metro area faded away and more stars came out than I’ve ever seen on the mainland. The experience has an unsettling scale to it. Most of the islands along the drive are so small and flat that you can see their entire geography stretch out in front of you, as if on a map. But the other little islands, dotted out in a line like a breadcrumb trail, continue all the way to the horizon. It goes on forever—the drive from Miami to Key West takes about as long as the drive from Miami to Orlando—and so you become very acutely aware of both the size of your field of view and how tiny that is compared to the distance you’re going. Then you remember you have Washington plates on your car and get a weird pit in your stomach. We checked in at Bahia Honda State Park, set up camp, and continued on for another hour until we made it into town. \n \n “Where The Freaks At?” Key West stands as nature\’s elegant response to one of mankind\’s timeless questions. There is a huge colony of mutant six-toed cats established by Earnest Hemingway that roams the island to this day. Duvall Street reminded me of Bourbon Street except with more families and somehow more leather too. Definitely an interesting spring break destination. That is all I can reasonably say about it on this website. \n \n I woke up early the next day to catch the sunrise, fell asleep in the sun for the next 5 hours, and caught the worst sunburn of my life. Then, half awake, I dropped the disposable camera in the seawater and messed up the film. And Canek hates camping, so he was complaining the whole time. But the manatees made up for it regardless, and the Keys will always have a place in my heart as a slice of the tropics reachable on a tank of gas.';
    loadCarouselImages(imageSets.set5);
});

document.getElementById('breckenridge').addEventListener('click', function() {
    fetch('posts/breckenridge.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('state-title').innerText = data.title;
            document.getElementById('state-description').innerHTML = data.description;
            loadCarouselImages(imageSets.set6);
        })
        .catch(error => console.error('Error loading text:', error));
});

if (window.innerWidth <= 800) {
    document.querySelectorAll('circle.map-button')
      .forEach(c => c.setAttribute('r', '14'));
}

window.addEventListener('load', function() {
    document.querySelector('.main__content').style.opacity = '1'; // Fade in on load
});

window.addEventListener('DOMContentLoaded', function () {
    // Check if we're on a small screen
    if (window.innerWidth <= 800) {
      const circles = document.querySelectorAll('circle.map-button');
      circles.forEach(circle => {
        circle.setAttribute('r', '9'); // Increase as needed
      });
    }
});

// Add more event listeners for other places you've visited
