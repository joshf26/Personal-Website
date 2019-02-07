const possibleInputs = {
    'help': {
        'action': function() {
            print('<b>help</b> - Display this message.');
            print('<b>about</b> - About Josh.');
            print('<b>website</b> - Visit Josh\'s website.');
            print('<b>pdf</b> - View a PDF version of this resume.');
            print('<b>education</b> - Where Josh goes to school.');
            print('<b>experience</b> - Past professional work experience.');
            print('<b>skills</b> - See what Josh can do.');
            print('<b>portfolio</b> - Past creative projects.');
            print('<b>extracurricular</b> - Clubs and activities.');
            print('<b>hireme</b> - Get in touch.');
        }
    },
    'about': {
        'action': function() {
            print('Hi. My name is Joshua Franklin, and I am currently studying Computer Science at the University of Colorado at Boulder. In my free time, I design websites and create music, videos, and software I think are worth sharing.');
            print('<br>');
            print('My interest in computers has lasted throughout all my life. I have been coding computers for many years, and recently I have been putting these skills into web development.');
            print('<img src="https://firebasestorage.googleapis.com/v0/b/website-23ad0.appspot.com/o/josh1.jpg?alt=media&token=7f7ad56e-3989-4ed5-97f0-daf0db4da18e" alt="Josh" width="400px">');
        }
    },
    'website': {
        'action': function() {
            print('Opening in new tab. Make sure your browser allows popups.');
            window.open('https://www.joshfrankl.in/');
        }
    },
    'pdf': {
        'action': function() {
            print('Opening in new tab. Make sure your browser allows popups.');
            window.open('https://www.joshfrankl.in/resume.pdf');
        }
    },
    'hireme': {
        'action': function() {
            print('Opening in new tab. Make sure your browser allows popups.');
            window.open('https://www.joshfrankl.in/#contact');
        }
    },
    'education': {
        'action': function() {
            print('<b>University of Colorado Boulder</b>');
            print('August 2017 - May 2021 (Expected Graduation Date)');
            print('<i>Pursuing BS in Computer Science and minor in Space.</i>');
            print('<b>Overall Cumulative GPA</b>: 3.673');
            print('<b>Computer Science GPA</b>: 4.0');
            print('<br>');
            print('<b>Natick High School</b>');
            print('2013 - 2017');
            print('<i>Honor Roll/High Honor Roll: 2013 - 2017</i>');
        }
    },
    'experience': {
        'action': function() {
            print('<b>Computer Science Course Assistant</b>');
            print('University of Colorado Boulder - Boulder, CO');
            print('2018');
            print('<i>Held office hours and answered students\' questions for the "Starting Computing" course at CU Boulder.</i>');
            print('<b>Skills Applied:</b> C++, Python, Teaching.');

            print('<br>');

            print('<b>Cloud Team Intern</b>');
            print('Cambridge Mobile Telematics - Cambridge, MA');
            print('Summer 2018');
            print('<i>Worked on web portal that utilized a Python/Django and PhP backend.</i>');
            print('<b>Skills Applied:</b> Python, Django, SQL, PhP, HTML, JavaScript, CSS, Git, Agile, Working on a Team.');

            print('<br>');

            print('<b>Software Engineering Intern</b>');
            print('PatientKeeper - Waltham, MA');
            print('Summer 2015');
            print('<i>Responsible for creating web-based backend debugging tool. Mentor complimented work, stating it felt professional and polished.</i>');
            print('<b>Skills Applied:</b> HTML, CSS, JavaScript, Java, JSP, SQL, Working on a Team');

            print('<br>');

            print('<b>Computer Science Private Tutor</b>');
            print('University of Colorado Boulder - Boulder, CO');
            print('2017 - Present');
            print('<i>Tutor students in many computer science and math courses at CU Boulder.</i>');
            print('<b>Skills Applied:</b> C++, Python, HTML, CSS, JavaScript, SQL, Assembly, Discrete Math.');

            print('<br>');

            print('<b>Freelance Web Developer</b>');
            print('2016 - Present');
            print('<i>Design and develop websites for small businesses. Type "portfolio" to see my work!</i>');
            print('<b>Skills Applied:</b> HTML, CSS, JavaScript, Firebase, Python (Flask/Django), WordPress.');

            print('<br>');

            print('<b>Volunteer Technology Assistant</b>');
            print('Council on Aging - Natick, MA');
            print('2013 - 2017');
            print('<i>Taught technology skills to senior citizens and helped senior center staff with IT problems.</i>');
            print('<b>Skills Applied:</b> IT, Tech Support, Microsoft Office.');
        }
    },
    'skills': {
        'action': function() {
            print('<b>Command usage:</b>');
            print('    skills [skill]');
            print('<b>Skills:</b>');
            print('    computer programming');
            print('    web development');
            print('    music');
        },
        'arguments': {
            'computer programming': function() {
                print('Python              [################EXPERT################]');
                print('HTML/CSS/JavaScript [##########PROFICIENT##########        ]');
                print('Git                 [##########PROFICIENT##########        ]');
                print('SQL                 [##########PROFICIENT##########        ]');
                print('C/C++               [#####INTERMEDIATE#####                ]');
                print('C#                  [#####INTERMEDIATE#####                ]');
                print('Java                [#####INTERMEDIATE#####                ]');
                print('PhP                 [###LEARNING###                        ]');
            },
            'web development': function() {
                print('HTML/CSS/JavaScript [##########PROFICIENT##########        ]');
                print('Django              [##########PROFICIENT##########        ]');
                print('Flask               [##########PROFICIENT##########        ]');
                print('SQL                 [##########PROFICIENT##########        ]');
                print('Firebase            [#####INTERMEDIATE#####                ]');
                print('jQuery              [#####INTERMEDIATE#####                ]');
                print('PhP                 [###LEARNING###                        ]');
                print('Node.js             [###LEARNING###                        ]');
                print('JSP                 [###LEARNING###                        ]');
            },
            'music': function() {
                print('Piano               [##########PROFICIENT##########        ]');
                print('Ukulele             [##########PROFICIENT##########        ]');
                print('Oboe                [#####INTERMEDIATE#####                ]');
                print('Guitar              [###LEARNING###                        ]');
                print('&#x1F3B5; Hear me play! Type "listen"');
            }
        }
    },
    'portfolio': {
        'action': function() {
            print('Opening in new tab. Make sure your browser allows popups.');
            window.open('https://www.joshfrankl.in/web#mywork');
        }
    },
    'extracurricular': {
        'action': function() {
            print('<b>CU Computer Graphics Club</b>');
            print('2017 - Current');
            print('<i>Vice President. Frequently give and listen to talks on computer graphics techniques.</i>');

            print('<br>');

            print('<b>CU Cyber Security Club</b>');
            print('2017 - Current');
            print('<i>Learn about cyber security attacks and defences, and participate in simulated hacking challenges.</i>');

            print('<br>');

            print('<b>Lucid Programming Competition</b>');
            print('2019');
            print('<i>Winner of the 1st place prize.</i>');

            print('<br>');

            print('<b>CU Local Hack Day</b>');
            print('2019');
            print('<i>Winner of the "Most Random Hack" prize.</i>');
        }
    },

    // Hidden from help/Easter egg
    'clear': {
        'action': function() {
            while (output.hasChildNodes()) {
                output.removeChild(output.firstChild);
            }
        }
    },
    'cls': {
        'action': function() {
            while (output.hasChildNodes()) {
                output.removeChild(output.firstChild);
            }
        }
    },
    'listen': {
        'action': function() {
            print('Opening in new tab. Make sure your browser allows popups.');
            window.open('https://distrokid.com/hyperfollow/joshuafranklin/bJUZ');
        }
    },
    'cd': {
        'action': function() {
            print('The only directories that will be changed is your company\'s to add my name! ;)');
        }
    },
    'cat': {
        'action': function() {
            print('&#x1F431; I love cats! Here\'s mine:');
            print('<img src="https://firebasestorage.googleapis.com/v0/b/website-23ad0.appspot.com/o/cat.jpg?alt=media&token=0b55b467-170e-42de-b111-0a85f1868c7a" alt="Carlotta!" width="200px">');
        }
    },
    'ls': {
        'action': function() {
            print('I\'m glad this shell looked convincing enough to trick you!');
        }
    },
    'pwd': {
        'action': function() {
            print('I\'m glad this shell looked convincing enough to trick you!');
        }
    },
    'dir': {
        'action': function() {
            print('I\'m glad this shell looked convincing enough to trick you!');
        }
    },
    'echo': {
        'action': function() {
            print('I\'m glad this shell looked convincing enough to trick you!');
        }
    }
};

const output = document.getElementById('output');
const prompt = document.getElementById('prompt').children[1];
const suggestion = document.getElementById('suggestion');

let history = [];
let history_position = -1;

function process_line(msg) {
    history.unshift(msg);
    history_position = -1;
    print('> ' + msg);

    if (!msg) return;

    let parts = msg.split(' ');
    let command = parts[0];

    let argument;
    if (parts.length > 1) {
        parts.splice(0, 1);
        argument = parts.join(' ');
    }
    else argument = '';

    if (command in possibleInputs) {
        if (argument && 'arguments' in possibleInputs[command] && argument in possibleInputs[command]['arguments']) {
            possibleInputs[command]['arguments'][argument]();
        }
        else {
            possibleInputs[command]['action']();
        }
    }
    else {
        print('Unknown command. Type "help" for a list of commands.');
    }
}

function print(msg) {
    let newElement = document.createElement('p');
    newElement.innerHTML = msg;
    output.appendChild(newElement);
}

function getSuggestedCommand(input) {
    if (!input) return '';

    for (let possibleInput in possibleInputs) {
        let command = input.substr(0, possibleInput.length);

        if (possibleInput.startsWith(command)) {
            if (input.length > possibleInput.length) {
                if (possibleInputs[possibleInput]['arguments']) {
                    for (let argument in possibleInputs[possibleInput]['arguments']) {
                        if ((possibleInput + ' ' + argument).startsWith(input)) {
                            return possibleInput + ' ' + argument;
                        }
                    }
                }
                return '';
            }
            return possibleInput;
        }
    }

    return '';
}

prompt.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        process_line(prompt.value);
        suggestion.innerText = '';
        prompt.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
    else if (event.keyCode === 38) {
        if (history_position + 1 !== history.length) {
            prompt.value = history[++history_position];
            setTimeout(function() {
                prompt.selectionStart = prompt.selectionEnd = 10000;
            }, 0);
        }
    }
    else if (event.keyCode === 40) {
        if (history_position > 0) {
            prompt.value = history[--history_position];
        }
        else if (history_position === 0) {
            prompt.value = '';
            history_position = -1;
        }
    }
    else if (event.keyCode === 9) {
        event.preventDefault();
        let suggestedCommand = getSuggestedCommand(prompt.value);
        if (suggestedCommand) {
            prompt.value = suggestedCommand;
        }
    }
});

prompt.addEventListener('keyup', function(event) {
    suggestion.innerText = getSuggestedCommand(prompt.value);
});

document.addEventListener('click', function(event) {
    prompt.focus();
});
