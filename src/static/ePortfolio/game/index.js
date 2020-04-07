const scoreElement = document.getElementById('score');
const resultElement = document.getElementById('result');
const partialElement = document.getElementById('partial');
const questionCounterElement = document.getElementById('question-counter');
const questionElement = document.getElementById('question');
const imageElement = document.getElementById('image');
const sliderElement = document.getElementById('slider');
const magnitudeElement = document.getElementById('magnitude');
const unitElement = document.getElementById('unit');
const finalScoreElement = document.getElementById('final-score');

const UNITS = {
    'radius': 'm',
    'mass': 'kg',
    'temperature': 'K',
    'luminosity': 'cd',
};

const OBJECTS = [
    {
        'name': 'The Sun',
        'image': 'https://i.ibb.co/ysbZtnj/sun.png',
        'properties': {
            'radius': 8,
            'mass': 30,
            'temperature': 3,
            'luminosity': 27,
        },
    },
    {
        'name': 'UY Scuti (Largest Star)',
        'image': 'https://i.ibb.co/qx1FjdG/uy-scuti.png',
        'properties': {
            'radius': 12,
            'mass': 31,
            'temperature': 3,
            'luminosity': 32,
        },
    },
    {
        'name': 'PSR J1748-2446ad (Smallest Star)',
        'image': 'https://i.ibb.co/qJfWXh6/EBLM-J0555-57.png',
        'properties': {
            'radius': 4,
            'mass': 30,
        },
    },
    {
        'name': 'The Moon',
        'image': 'https://i.ibb.co/4Jp8jBc/moon.png',
        'properties': {
            'radius': 6,
            'mass': 22,
        },
    },
    {
        'name': 'The Milky Way',
        'image': 'https://i.ibb.co/b3XMspC/milkyway.png',
        'properties': {
            'radius': 20,
            'mass': 42,
        },
    },
    {
        'name': 'Andromeda',
        'image': 'https://i.ibb.co/SxSdMyy/andromeda.png',
        'properties': {
            'radius': 21,
            'mass': 42,
        },
    },
    {
        'name': 'Mercury',
        'image': 'https://i.ibb.co/mbR4tQh/mercury.png',
        'properties': {
            'radius': 6,
            'mass': 23,
        },
    },
    {
        'name': 'Venus',
        'image': 'https://i.ibb.co/Tt0Srkd/venus.png',
        'properties': {
            'radius': 6,
            'mass': 24,
        },
    },
    {
        'name': 'Earth',
        'image': 'https://i.ibb.co/CJfYBm2/earth.png',
        'properties': {
            'radius': 6,
            'mass': 24,
        },
    },
    {
        'name': 'Mars',
        'image': 'https://i.ibb.co/r3hpFzz/mars.png',
        'properties': {
            'radius': 6,
            'mass': 23,
        },
    },
    {
        'name': 'Jupiter',
        'image': 'https://i.ibb.co/tQFyPPr/jupiter.png',
        'properties': {
            'radius': 7,
            'mass': 27,
        },
    },
    {
        'name': 'Saturn',
        'image': 'https://i.ibb.co/S5r9bfG/saturn.png',
        'properties': {
            'radius': 7,
            'mass': 26,
        },
    },
    {
        'name': 'Uranus',
        'image': 'https://i.ibb.co/n0vQ7wf/uranus.png',
        'properties': {
            'radius': 7,
            'mass': 25,
        },
    },
    {
        'name': 'Neptune',
        'image': 'https://i.ibb.co/k8LFkQC/uranus.png',
        'properties': {
            'radius': 7,
            'mass': 26,
        },
    },
];

let modal;
let object;
let property;

// Modified From https://stackoverflow.com/questions/9071573/is-there-a-simple-way-to-make-a-random-selection-from-an-array-in-javascript-or
function choose(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function nextQuestion() {
    object = choose(OBJECTS);
    property = choose(Object.keys(object['properties']));

    questionElement.innerHTML = `What is the <strong>${property}</strong> of ${object['name']} in ${UNITS[property]}?`;
    imageElement.alt = object['name'];
    imageElement.src = object['image'];
    unitElement.innerText = UNITS[property];
}

function submit() {
    const guess = parseInt(sliderElement.value);
    const actual = object['properties'][property];

    let scoreToAdd = 0;
    if (guess === actual) {
        resultElement.innerHTML = `Correct! ${object['name']}'s ${property} is 10<sup style="color: green">${actual}</sup>&nbsp;${UNITS[property]}.`;
        resultElement.style.color = 'green';
        partialElement.innerText = '';

        scoreToAdd = 5;
    } else {
        resultElement.innerHTML = `No! ${object['name']}'s ${property} is 10<sup style="color: red">${actual}</sup>&nbsp;${UNITS[property]}, not 10<sup style="color: red">${guess}</sup>&nbsp;${UNITS[property]}.`;
        resultElement.style.color = 'red';

        let difference = Math.abs(guess - actual);
        if (difference < 4) {
            scoreToAdd = 4 - difference;
            partialElement.innerText = `But you still get ${scoreToAdd} point${scoreToAdd === 1 ? '' : 's'} for being close.`;
        } else {
            partialElement.innerText = '';
        }
    }

    scoreElement.innerText = (parseInt(scoreElement.innerText) + scoreToAdd).toString();

    let questionCount = parseInt(questionCounterElement.innerText);

    if (questionCount === 10) {
        document.querySelectorAll('.hide-at-end').forEach(element => {
            element.style.display = 'none';
        });
        document.querySelectorAll('.show-at-end').forEach(element => {
            element.style.display = '';
        });
        finalScoreElement.innerText = scoreElement.innerText;
    } else {
        questionCounterElement.innerText = (questionCount + 1).toString();
    }


    nextQuestion();
}

function magnitudeUpdate() {
    magnitudeElement.innerText = sliderElement.value;
}

document.addEventListener('DOMContentLoaded', () => {
    nextQuestion();
});
