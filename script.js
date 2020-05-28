// Smooth Scroll - https://github.com/cferdinandi/smooth-scroll
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 400
});

window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
  });