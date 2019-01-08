const ANIMATION_TIME = 1000;

const ball = $('#ball');

/* Color codes:
   0 - Color Cycle
   1 - Orange
   2 - Blue
 */
const ball_positions = [
  {
    element: $('#title-ball-position'),
    scroll_target: $('#title-target'),
    offset: {
      top: 110,
      left: 16
    },
    size: '15px',
    small_offset: {
      top: 40,
      left: 7
    },
    small_size: '10px',
    color: 0,
  },
  {
    element: $('#about-ball-pos'),
    scroll_target: $('#about-target'),
    offset: {
      top: 20,
      left: 9
    },
    size: '10px',
    small_offset: {
      top: 15,
      left: 7
    },
    small_size: '8px',
    color: 1,
  },
  {
    element: $('#projects-ball-position'),
    scroll_target: $('#projects-target'),
    offset: {
      top: 20,
      left: 0
    },
    size: '400px',
    small_offset: {
      top: 15,
      left: 0
    },
    small_size: '300px',
    center: true,
    color: 2,
    under: true
  },
];

const position_coordinates = [{}, {}, {}];

let current_position_index = 0;
let small;

// TODO: This function needs to be hooked up to a resize event listener.
function calculate_coordinates() {
  ball_positions.forEach(function (position, index) {
    position_coordinates[index] = position.element.offset();
  });

  small = window.innerWidth < 900;
}

function animate() {
  const position = ball_positions[current_position_index];
  const coordinates = position_coordinates[current_position_index];

  ball.animate({
    top: (coordinates.top + (small ? position.small_offset.top : position.offset.top)) + 'px',
    left: position.center ? '50%' : (coordinates.left + (small ? position.small_offset.left : position.offset.left)) + 'px',
    height: small ? position.small_size : position.size,
    width: small ? position.small_size : position.size,
    backgroundColor: position.color === 1 ? '#bf360c' : 'blue',
  }, ANIMATION_TIME);

  // Execute before animation.
  if (position.color !== 0) {
    ball.css('animation', 'none');
  }

  // Execute half-way through animation.
  setTimeout(() => {
    if (position.under)
      ball.css('z-index', '-1');
    else
      ball.css('z-index', '');
  }, ANIMATION_TIME / 2);

  // Execute after animation.
  setTimeout(() => {
    if (position.color === 0)
      ball.css('animation', 'ballblink infinite linear 1.5s');
  }, ANIMATION_TIME);
}

function update_ball(force) {
  if (current_position_index !== 0 && window.scrollY < position_coordinates[current_position_index - 1].top)
    current_position_index--;
  else if (position_coordinates.length - 1 !== current_position_index && window.scrollY > position_coordinates[current_position_index].top) {
    current_position_index++;
  } else if (!force) return;

  animate();
}

calculate_coordinates();
update_ball(true);

ball.click(() => {
  if (current_position_index === ball_positions.length - 1) return;

  $.smoothScroll({
    scrollTarget: ball_positions[current_position_index + 1].scroll_target,
    speed: 800
  });
});

window.addEventListener('scroll', () => {
  update_ball(false);
});

let resize_timeout;
window.addEventListener('resize', () => {
  clearTimeout(resize_timeout);
  resize_timeout = setTimeout(() => {
    calculate_coordinates();
    animate();
  }, 300);
});

$('#contact').click(function () {
  $('#contact-popup').animate({
    left: '10%',
    right: '10%'
  }, 500);
  $('#page-mask').animate({
    opacity: '1'
  }, 500);
});
$('#close').click(function () {
  $('#contact-popup').animate({
    left: '-50%',
    right: '150%'
  }, 500);
  $('#page-mask').animate({
    opacity: '0'
  }, 500);
});
