let slides = document.querySelectorAll('.slide');
let current = 0;

function next() {
  // Play music on first click (Slide 1)
  if (current === 0) {
    const music = document.getElementById('bg-music');
    music.play().catch(() => {});
  }

  slides[current].classList.remove('active');
  current++;
  if (current < slides.length) {
    slides[current].classList.add('active');
  }
}
