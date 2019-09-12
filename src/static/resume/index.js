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
      print('<b>contact</b> - Get in touch.');
    }
  },
  'about': {
    'action': function() {
      print('Hi. My name is Joshua Franklin. I am currently studying at the University of Colorado at Boulder, pursuing a BS in Computer Science and a minor in Space. Outside of school, I enjoy biking, hiking, and competing in hackathons.');
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
  'contact': {
    'action': function() {
      print('Opening in new tab. Make sure your browser allows popups.');
      window.open('https://www.joshfrankl.in/#contact');
    }
  },
  'education': {
    'action': function() {
      print('<b>Computer Science Major and Space Minor, May 2021</b>');
      print('<i>University of Colorado at Boulder</i>');
      print('Overall Cumulative GPA: <b>3.673</b>');
      print('Computer Science GPA: <b>4.0</b>');
    }
  },
  'experience': {
    'action': function() {
      print('<b>Software Engineering Intern, Summer 2019</b>');
      print('Lucid Software - Greater Salt Lake City Area');
      print('<i>&bullet; Integrated various high level refactors like framework migration and dependency injection.</i>');
      print('<i>&bullet; Participated in the company\'s Hackathon, where my team extended our product\'s flowcharting tools to allow flowcharts to be run like a computer program.</i>');
      print('<b>Skills Applied:</b> TypeScript, Scala, Angular, Less, Play, Git, Agile');

      print('<br>');

      print('<b>Software Engineering Intern, Summer 2018</b>');
      print('Cambridge Mobile Telematics - Greater Boston Area');
      print('<i>&bullet; Created new features for a web portal that utilized a Python/Django and PHP backend.</i>');
      print('<i>&bullet; Worked with continuous customer feedback to tune the service to meet customer needs.</i>');
      print('<b>Skills Applied:</b> Python, Django, SQL, PHP, HTML, JavaScript, CSS, Git, Agile');

      print('<br>');

      print('<b>Software Engineering Intern, Summer 2015</b>');
      print('PatientKeeper - Greater Boston Area');
      print('<i>&bullet; Created web-based backend debugging tool.</i>');
      print('<i>&bullet; Worked closely with developers to tailor tool to their needs.</i>');
      print('<b>Skills Applied:</b> Java, JSP, HTML, CSS, JavaScript, SQL');

      print('<br>');

      print('<b>Freelance Web Developer, 2016 - 2019</b>');
      print('<i>&bullet; Designed and developed websites for small businesses.</i>');
      print('<i>&bullet; Experimented with design, and learned what makes a great user interface.</i>');
      print('<i>&bullet; Type "portfolio" to see my past work!</i>');
      print('<b>Skills Applied:</b> HTML, CSS, JavaScript, WordPress');

      print('<br>');

      print('<b>Computer Science Course Assistant, Spring and Fall 2018</b>');
      print('University of Colorado at Boulder - Boulder, CO');
      print('<i>&bullet; Held office hours and answered students’ questions for the "Starting Computing" course at CU Boulder.</i>');
      print('<i>&bullet; Learned how to effectively teach students computer programming skills.</i>');
      print('<b>Skills Applied:</b> C++, Python, Teaching');

      print('<br>');

      print('<b>Volunteer Technology Assistant, 2013 - 2017</b>');
      print('Council on Aging - Natick, MA');
      print('<i>&bullet; Taught technology skills to senior citizens and helped senior center staff with IT problems.</i>');
      print('<b>Skills Applied:</b> IT, Tech Support, Microsoft Office, Teaching');
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
        print('HTML/CSS/JavaScript [################EXPERT################]');
        print('TypeScript          [################EXPERT################]');
        print('Java                [##########PROFICIENT##########        ]');
        print('SQL                 [##########PROFICIENT##########        ]');
        print('Scala               [##########PROFICIENT##########        ]');
        print('Git                 [##########PROFICIENT##########        ]');
        print('C/C++               [#####INTERMEDIATE#####                ]');
        print('C#                  [#####INTERMEDIATE#####                ]');
        print('PHP                 [###BEGINNER###                        ]');
      },
      'web development': function() {
        print('HTML/CSS/JavaScript [################EXPERT################]');
        print('TypeScript          [################EXPERT################]');
        print('Django              [##########PROFICIENT##########        ]');
        print('Flask               [##########PROFICIENT##########        ]');
        print('SQL                 [##########PROFICIENT##########        ]');
        print('Angular             [#####INTERMEDIATE#####                ]');
        print('Firebase            [#####INTERMEDIATE#####                ]');
        print('Play                [#####INTERMEDIATE#####                ]');
        print('jQuery              [#####INTERMEDIATE#####                ]');
        print('PHP                 [###BEGINNER###                        ]');
        print('JSP                 [###BEGINNER###                        ]');
      },
      'music': function() {
        print('Piano               [##########PROFICIENT##########        ]');
        print('Ukulele             [##########PROFICIENT##########        ]');
        print('Oboe                [#####INTERMEDIATE#####                ]');
        print('Guitar              [###BEGINNER###                        ]');
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
      print('<i><b>Vice President</b>. Frequently give and listen to talks on computer graphics techniques.</i>');

      print('<br>');

      print('<b>CU Cyber Security Club</b>');
      print('2017 - Current');
      print('<i>Learn about cyber security attacks and defences, and participate in simulated hacking challenges.</i>');

      print('<br>');

      print('<b>Lucid Programming Competition</b>');
      print('2019');
      print('<i>Winner of 1st place.</i>');

      print('<br>');

      print('<b>T9Hacks</b>');
      print('2019');
      print('<i>Winner of "Best Community Hack".</i>');

      print('<br>');

      print('<b>CU Local Hack Day</b>');
      print('2019');
      print('<i>Winner of "Most Random Hack".</i>');
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
  } else argument = '';

  if (command in possibleInputs) {
    if (argument && 'arguments' in possibleInputs[command] && argument in possibleInputs[command]['arguments']) {
      possibleInputs[command]['arguments'][argument]();
    } else {
      possibleInputs[command]['action']();
    }
  } else {
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

prompt.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    process_line(prompt.value);
    suggestion.innerText = '';
    prompt.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  } else if (event.keyCode === 38) {
    if (history_position + 1 !== history.length) {
      prompt.value = history[++history_position];
      setTimeout(function() {
        prompt.selectionStart = prompt.selectionEnd = 10000;
      }, 0);
    }
  } else if (event.keyCode === 40) {
    if (history_position > 0) {
      prompt.value = history[--history_position];
    } else if (history_position === 0) {
      prompt.value = '';
      history_position = -1;
    }
  } else if (event.keyCode === 9) {
    event.preventDefault();
    let suggestedCommand = getSuggestedCommand(prompt.value);
    if (suggestedCommand) {
      prompt.value = suggestedCommand;
    }
  }
});

prompt.addEventListener('keyup', function (event) {
  suggestion.innerText = getSuggestedCommand(prompt.value);
});

document.addEventListener('click', function (event) {
  prompt.focus();
});
