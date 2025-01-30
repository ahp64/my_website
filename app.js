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
        'amar/IMG_2422.mov',
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
        'keys/698E1DDA-1951-4C6E-9B74-1A6BF76A0F10.mov',
        'keys/IMG_0987.webp',
        'keys/IMG_0761.mov',
        'keys/IMG_0747.webp',
        'keys/IMG_0989.webp',
        'keys/filtered-62C98421-1252-4C1F-BD8C-4964543F9C92.mov',
        'keys/IMG_0751.webp',
        'keys/IMG_0753.webp',
        'keys/IMG_0985.webp',
        'keys/IMG_0986.webp',
    ],

    set6: [
        'bre/IMG_2318.mov',
        'bre/IMG_2319.png',
        'bre/IMG_2321.png',
        'bre/IMG_2329.mov',
        'bre/IMG_2331.mov',
        'bre/IMG_1844.png',
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
        // For Bootstrap 3, you might use .item. For Bootstrap 4/5, use .carousel-item instead:
        item.classList.add('item'); 
        if (index === 0) item.classList.add('active');

        // Decide if it's an image or video
        if (file.toLowerCase().endsWith('.mov')) {
            const video = document.createElement('video');
            video.src = imageFolder + file;
            // Remove or omit controls
            // video.controls = true; // If you had this line, remove it or comment it out
            // Add classes to size it similarly to images:
            // (Bootstrap 3 example)
            video.classList.add('img-responsive', 'center-block');
            video.autoplay = true;      // Autoplay
            video.muted = true;         // Often required by browsers for autoplay
            video.playsinline = true;   // Helps ensure autoplay on iOS
            video.loop = true;
            // If using Bootstrap 4/5, you might do:
            // video.classList.add('d-block', 'w-100');

            item.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = imageFolder + file;
            // (Bootstrap 3 example)
            img.classList.add('img-responsive', 'center-block');
            // If using Bootstrap 4/5, you might do:
            // img.classList.add('d-block', 'w-100');

            item.appendChild(img);
        }

        inner.appendChild(item);
    });

    // Hide controls if there's only one file
    if (images.length === 1) {
        document.getElementById('indics').style.display = 'none';
        document.getElementById('leftc').style.display = 'none';
        document.getElementById('rightc').style.display = 'none';
    } else {
        document.getElementById('indics').style.display = 'block';
        document.getElementById('leftc').style.display = 'block';
        document.getElementById('rightc').style.display = 'block';
    }

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
    document.getElementById('state-description').innerText = 'When I was reading about Tucson before I stopped there, I heard it was both a city and a college town. I got a chance to stress test this by going there when all of the college students were home for winter break. But college towns, in my experience, are set apart as much by the character of the townies as by that of the students, from the unbelievably generous F-250 tailgate commandos to the cult members to the faces you see on campus police sketches produced when a student gets robbed. University of Arizona students call their townies \"t-locs\" and they have the same type of concentrated eccentricity that I have come to expect from places like Gainesville or Eugene. \n \n The real reason I stopped in Tucson was because it was December 31st and I had seen on Instagram that they drop a giant Taco Bell taco for New Year\'s Eve instead of a ball (big enough to get corporate sponsorships for their eccentricities, I guess). But the image displayed here is actually not mine. I was misled by my Uber driver and ended up at a French revolution-themed event at a hotel 2 blocks away instead, then got too comfy with a group of t-locs I met before I realized my mistake. I\'m not sure if it\'s snobby of me to have passed up something eccentric like that for bottomless champagne and macaroons or down to earth to have skipped it for the company. I just wish I still had the video of the guillotines dropping at midnight.';
    loadCarouselImages(imageSets.set4);
});

document.getElementById('keys').addEventListener('click', function() {
    document.getElementById('state-title').innerText = 'The Florida Keys';
    document.getElementById('state-description').innerText = 'The initial drive out to Bahia Honda Key, where my friend Canek and I camped, was easily the nicest drive I\’ve done on in the state of Florida. The scenery slowly transitions from the towns, like Homestead and Florida City, that are still (somehow) technically in Miami-Dade County to endless swampland that grows more and more sparse, until finally you\’re out over the turquoise blue water of the Strait of Florida. We found one of my dad\’s old reggae CDs in the trunk and popped it in. \n \n The sun was setting for what felt like an hour, and as it grew darker, the light from the Miami metro area faded away and more stars came out than I’ve ever seen on the mainland. The experience has an unsettling scale to it. Most of the islands along the drive are so small and flat that you can see their entire geography stretch out in front of you, as if on a map. But the other little islands, dotted out in a line like a breadcrumb trail, continue all the way to the horizon. It goes on forever—the drive from Miami to Key West takes about as long as the drive from Miami to Orlando—and so you become very acutely aware of both the size of your field of view and how tiny that is compared to the distance you’re going. Then you remember you have Washington plates on your car and get a weird pit in your stomach. We checked in at Bahia Honda State Park, set up camp, and continued on for another hour until we made it into town. \n \n “Where The Freaks At?” Key West stands as nature\’s elegant response to one of mankind\’s timeless questions. There is a huge colony of mutant six-toed cats established by Earnest Hemingway that roams the island to this day. Duvall Street reminded me of Bourbon Street except with more families and somehow more leather too. Definitely an interesting spring break destination. That is all I can reasonably say about it on this website. \n \n I woke up early the next day to catch the sunrise, fell asleep in the sun for the next 5 hours, and caught the worst sunburn of my life. Then, half awake, I dropped the disposable camera in the seawater and messed up the film. And Canek hates camping, so he was complaining the whole time. But the manatees made up for it regardless, and the Keys will always have a place in my heart as a slice of the tropics reachable on a tank of gas.';
    loadCarouselImages(imageSets.set5);
});

document.getElementById('breckenridge').addEventListener('click', function() {
    document.getElementById('state-title').innerText = 'Boreas Mountain, CO';
    document.getElementById('state-description').innerHTML = 'Coloradoans seem to communicate through their hats. Flat-brimmed, curved, 5 panel, corduroy, beanie, with or without the little cord running across, even those funny looking ones some cyclists wear. I think I might have seen 5 bare heads of hair in the time I was there and it was like seeing an Orca with dorsal fin collapse. <br> <br> When I try to explain to people how I feel about my car it almost always feels like a futile exercise. I think it embodies my better nature. At one point, way up in the Rockies along I-70, I drove off deep onto an access road to relieve myself and rest for a little. By the time I pulled over, the hum of the interstate had vanished completely. I swear I heard my car gasping for air. <br> <br> Naturally aspirated internal combustion engines lose around 3% of their power for every 1,000 feet of elevation gain. I was at around 10,000 feet at the time, and my 20-year-old, fully loaded, 115hp stick shift Volkswagen Jetta was struggling to make it past 30mph up some of the hills on the highway. <br> <br> A few years ago, when I was gearing up for my first transcontinental drive, my very concerned grandparents offered to straight up gift me their retiree-milage 2019 Golf GTI Autobahn Edition to do the trip with instead. I didn\’t even bother explaining to them why when I chose to stick with my 2004 Jetta. The interstate highway system, satellite navigation, climate control, and continuous variable transmission, among other things, have transformed the automobile from a conveyance between oases to an oasis in itself, and have taken much of the romance out of driving.  Still, I sluice a lot of sentimentality out of this car. <br> <br> My Jetta was bought by my dad to get him to work and back. There is no section in the owner\’s manual on whether or not to take it dispersed camping in the Rockies, but I think common sense is enough of a counterindication. Unfortunately, at around 9:30PM, on August 16, 2025, at a gas station in Breckenridge, Colorado, I decided to do just that. The dirt road leading into the sites, which were numbered but not maintained, went on for around a mile before reaching the entrance. Beyond that, the shoulder suddenly gave way to a sheer drop down the side of the mountain and the road narrowed to barely have room for two cars. I started to bounce over potholes that were barely perceptible in the dusk. I was feeling groggy from altitude sickness. Site 1 was taken, along with Site 2. Site 3 went up a steep incline and then behind a thicket of trees. I got out of my car to walk up and see if anyone was there and, sure enough, an old RV\’s rectangular halogen lights peeked out at me from behind the foliage. I had not taken into account that fact that this was a weekend night, toward the end of the summer, in probably the most outdoorsy state in the country. It was thus that I continued up the mountain, telling myself again and again that the next site would be free as the night grew darker and the potholes grew deeper. Soon, the bottom of the car began to bump, then brush, then painfully scrape across the road. After almost an hour, I reached the end, Site 20, and was dismayed to find yet another tent pitched next to yet another Subaru. <br> <br> I started scraping back down the mountain, defeated, trying in vain to remember by site number which parts of the road the really nasty potholes had been. Finally, I reached the bottom at around 11:00PM. I was right by the gate when I saw, out in the distance, a small, reflective sign that read “0,” one I must have driven by earlier. <br> <br> <i>Gotta be a mile marker.</i> <br> <br> I followed a faint trail into the forest and sure enough, about 30 yards out, I found a clearing with a fire pit. The 0th site. <br> <br> <i> Who the fuck 0-indexes a Forest Service campground. </i> <br> <br> Years of computer science education and I had just committed the cardinal sin of Programming Fundamentals 1. I walked back through the dark, grabbed my tent and sleeping bag from the car, set up camp, and got as comfortable as I could on the gravel. <br> <br> Somehow, the only damage to my car that I found the next morning was a broken splashguard that I was able to zip tie back to the frame 2 days later. Still, I should have stopped at a motel that night. This post is a formal apology to my black 2004 Volkswagen Jetta GL and a promise to do better.';
    loadCarouselImages(imageSets.set6);
});

window.addEventListener('load', function() {
    document.querySelector('.main__content').style.opacity = '1'; // Fade in on load
});

// Add more event listeners for other places you've visited
