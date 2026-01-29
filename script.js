let slides = document.querySelectorAll('.slide');
let current = 0;

function next() {
  slides[current].classList.remove('active');
  current++;
  if (current < slides.length) {
    slides[current].classList.add('active');
  }
}
