const ball_inline = $('#ballinline');
const ball = $('#ball');
const title = $('#title');
const about = $('#about');

let document_rect;
let ball_pos;
let about_pos;

function init() {
  document_rect = document.body.getBoundingClientRect();

  let ball_rect = ball_inline.get(0).getBoundingClientRect();
  ball_pos = {
    top: ball_rect.top - document_rect.top,
    left: ball_rect.left - document_rect.left
  };

  let about_rect = $('#ballpos1').get(0).getBoundingClientRect();
  about_pos = {
    top: about_rect.top - document_rect.top,
    left: about_rect.left - document_rect.left
  };
}

function drop() {
  // Replace the period in the sentence with a ball for animation.
  ball.css('top', (ball_pos.top + 104) + 'px');
  ball.css('left', (ball_pos.left + 8) + 'px');
  ball.css('display', 'block');
  ball_inline.css('visibility', 'hidden');
  ball.css('backgroundColor', ball_inline.css('color'));

  // Start the ball as orange and make it grow.
  ball.animate({
    backgroundColor: '#bf360c',
    left: (about_pos.left + 12) + 'px',
    height: '15px',
    width: '15px',
    top: (about_pos.top + 20) + 'px'
  }, 1000);

  $.smoothScroll({
    scrollTarget: $('#about-target'),
    speed: 800
  });
}

function drop2() {
  $.smoothScroll({
    scrollTarget: $('#projects-target'),
    speed: 800
  });
}

ball_inline.hover(function () {
  drop();
});

init();
