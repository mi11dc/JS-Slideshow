let currentSlide = 0;
updateCounter();

function setSlide(slide) {
    currentSlide = slide;

    // Create a reference for existing slides
    let slides = getElefromClass("slide");

    // check currentSlide variable
    if(currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if(currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    // Call a function for changing CSS
    slideImageStyle(slides);
}

function next() {
    // Increment slide counter by one
    currentSlide++;

    // Call a function to set sldies
    setSlide(currentSlide);
}

function previous() {
    // Decrement slide counter by one
    currentSlide--;

    // Call a function to set sldies
    setSlide(currentSlide);
}

function updateCounter() {
    // Create a reference for existing slides
    let slides = getElefromClass("slide");

    // Create a reference for existing counter
    let counter = getElefromClass("counter");

    // Update the content of the counter
    counter[0].innerHTML = (currentSlide + 1) + '/' + slides.length;
}

function getElefromClass(className) {
    // return a reference for classname
    return document.getElementsByClassName(className);
}

function slideImageStyle(slides) {
    // hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // display current slide
    slides[currentSlide].style.display = "block";

    updateCounter();
}