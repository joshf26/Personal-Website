const sliderElement = document.getElementById('slider');
const magnitudeElement = document.getElementById('magnitude');

function magnitudeUpdate() {
    magnitudeElement.innerText = sliderElement.value;
}
