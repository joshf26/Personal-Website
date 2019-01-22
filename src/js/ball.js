const ANIMATION_TIME = 1000;

const ball = $('#ball');
const helper = $('#helper');

/* Color codes:
   0 - Color Cycle
   1 - Orange
   2 - Blue
 */
const ball_positions = [
  {
    element: $('#title'),
    scroll_target: $('#title-target'),
    offset: {
      top: 81,
      left: 595
    },
    size: '15px',
    small_offset: {
      top: 33,
      left: 255
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
let helper_shown = false;
let animating = false;
let try_again = false;

function calculate_coordinates() {
  ball_positions.forEach(function (position, index) {
    position_coordinates[index] = position.element.offset();
  });

  small = window.innerWidth < 900;
}

function animate() {
  if (animating) {
    try_again = true;
    return;
  }

  const position = ball_positions[current_position_index];
  const coordinates = position_coordinates[current_position_index];

  animating = true;
  ball.animate({
    top: (coordinates.top + (small ? position.small_offset.top : position.offset.top)) + 'px',
    left: position.center ? '50%' : (coordinates.left + (small ? position.small_offset.left : position.offset.left)) + 'px',
    height: small ? position.small_size : position.size,
    width: small ? position.small_size : position.size,
    backgroundColor: position.color === 1 ? '#bf360c' : 'blue',
  }, ANIMATION_TIME, () => {
    if (position.color === 0)
      ball.css('animation', 'ballblink infinite linear 1.5s');
    animating = false;
    if (try_again) {
      try_again = false;
      animate();
    }
  });

  // Execute before animation.
  if (position.color !== 0)
    ball.css('animation', 'none');

  if (helper_shown) {
    helper.animate({
      opacity: 0
    }, 300);
    helper_shown = false;
  }

  // Execute half-way through animation.
  setTimeout(() => {
    if (position.under)
      ball.css('z-index', '-1');
    else
      ball.css('z-index', '');
  }, ANIMATION_TIME / 2);
}

function update_ball(force) {
  if (current_position_index !== 0 && window.scrollY < position_coordinates[current_position_index - 1].top)
    current_position_index--;
  else if (position_coordinates.length - 1 !== current_position_index && window.scrollY > position_coordinates[current_position_index].top) {
    current_position_index++;
  } else if (!force) return;

  animate();
}

function position_helper() {
  let offset = ball.offset();
  helper.css('top', (offset.top + (small ? 10 : 20)) + 'px');
  helper.css('left', (offset.left + (small ? -72 : -95)) + 'px');
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

if (window.scrollY === 0) {
  helper_shown = true;
  setTimeout(() => {
    position_helper();
    if (helper_shown)
      helper.animate({
        opacity: 1
      }, 400);
  }, 2000);
}
