const PAGE_HEIGHT = 40000;

const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');

const rocket = document.getElementById('rocket');
const end = document.getElementById('end');

function updateLayers() {
    const scroll = Math.max(window.scrollY - 2000, 0);
    layer1.style.top = `-${PAGE_HEIGHT - scroll}px`;
    layer2.style.top = `-${PAGE_HEIGHT - scroll / 2}px`;
    layer3.style.top = `-${PAGE_HEIGHT - scroll / 4}px`;
}

function onScroll() {
    if (window.scrollY > 500) {
        rocket.src = 'assets/rocket-flames.svg';
    } else {
        rocket.src = 'assets/rocket.svg';
    }

    if (window.scrollY > 500 && window.scrollY < 2000) {
        const translation = Math.sin(window.scrollY) * window.scrollY / 400;
        rocket.style.transform = `translate(calc(-50% + ${translation}px), -50%)`;
    } else {
        const darkenValue = Math.max(window.scrollY - 5000, 0);
        const red = 141 - darkenValue / 20;
        const blueGreen = 255 - darkenValue / 10;
        document.body.style.backgroundColor = `rgb(${red}, ${blueGreen}, ${blueGreen})`;
    }

    if (window.scrollY > 32000) {
        rocket.style.top = `calc(50% - ${(window.scrollY - 32000) / 3}px)`;

        if (window.scrollY > 33000) {
            end.style.opacity = `${(window.scrollY - 33000) / 5}%`;
        }
    } else {
        rocket.style.top = `50%`;
        end.style.opacity = `0`;

        updateLayers();
    }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => window.scrollTo(0, 0), 200);
    updateLayers();
});
