const ball_inline = $('#ballinline');
const ball = $('#ball');
const title = $('#title');
const about = $('#about');

let ball_rect;
let circle_image_rect;

function init() {
  ball_rect = ball_inline.get(0).getBoundingClientRect();
  circle_image_rect = about.children('img').get(0).getBoundingClientRect();
}

function drop() {
  // Replace the period in the sentence with a ball for animation.
  ball.css('top', (ball_rect.top + 104) + 'px');
  ball.css('left', (ball_rect.left + 8) + 'px');
  ball.css('display', 'block');
  ball_inline.css('visibility', 'hidden');
  ball.css('backgroundColor', ball_inline.css('color'));

  // Start the ball as orange and make it grow.
  ball.animate({
    backgroundColor: '#bf360c',
    left: '50%',
    height: '200px',
    width: '200px',
    top: circle_image_rect.top + 'px'
  }, 1000);

  // Animate the rest of the text to move out of screen.
  title.animate({
    top: "-50%"
  }, 1000);

  about.animate({
    top: "50%"
  }, 1000);
}

ball_inline.hover(function() {
  drop();
});

init();
