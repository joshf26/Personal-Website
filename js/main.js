const ball_inline = $('#ballinline');
const ball = $('#ball');

let ball_pos;
let about_pos;
let project_pos;

let current_section = 0;

function init() {
  let document_rect = document.body.getBoundingClientRect();

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

  let project_rect = $('#ballpos2').get(0).getBoundingClientRect();
  project_pos = {
    top: project_rect.top - document_rect.top,
    left: project_rect.left - document_rect.left
  };
}

function go_to_title(current_section) {
  ball.animate({
    top: (ball_pos.top + 128) + 'px',
    height: '15px',
    width: '15px',
    left: (ball_pos.left + 17) + 'px'
  }, 1000, function () {
    ball.css('display', 'none');
    ball_inline.css('visibility', 'visible');
  });
}

function go_to_about(current_section) {
  if (current_section === 0) {
    // Replace the period in the sentence with a ball for animation.
    ball.css('top', (ball_pos.top + 128) + 'px');
    ball.css('left', (ball_pos.left + 17) + 'px');
    ball.css('display', 'block');
    ball_inline.css('visibility', 'hidden');
    ball.css('backgroundColor', ball_inline.css('color'));
  }

  // Start the ball as orange and make it shrink.
  ball.animate({
    backgroundColor: '#bf360c',
    left: (about_pos.left + 10) + 'px',
    height: '10px',
    width: '10px',
    top: (about_pos.top + 20) + 'px'
  }, 1000);

  setTimeout(function () {
    ball.css('zIndex', '');
  }, 500);

  // Scroll the page down to the about section.
  // $.smoothScroll({
  //   scrollTarget: $('#about-target'),
  //   speed: 800
  // });
}

function go_to_projects(current_section) {
  ball.animate({
    backgroundColor: 'blue',
    left: '50%',
    height: '400px',
    width: '400px',
    top: (project_pos.top + 30) + 'px'
  }, 1000);

  setTimeout(function () {
    ball.css('zIndex', '-1');
  }, 500);

  // $.smoothScroll({
  //   scrollTarget: $('#projects-target'),
  //   speed: 800
  // });
}

const section_animations = [go_to_title, go_to_about, go_to_projects, function () {}];

document.addEventListener('scroll', function () {
  let documentTop = $(window).scrollTop();
  let new_section = Math.round(documentTop / window.innerHeight);
  if (new_section !== current_section) {
    section_animations[new_section](current_section);
    current_section = new_section;
  }
});

init();
