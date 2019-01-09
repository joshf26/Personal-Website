var sliderElement = document.querySelector('.slider');
var sliderInstance = new M.Slider(sliderElement, {"indicators": false});

function nextSlide() {
    sliderInstance.next();
}

function previousSlide() {
    sliderInstance.prev();
}
