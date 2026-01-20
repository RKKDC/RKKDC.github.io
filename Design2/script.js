const categories = document.querySelectorAll('.category');
const scrollContainer = document.querySelector('.scroll-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');
const heroOverlay = document.querySelector('.hero-overlay');

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.scroll-container > section').length;

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  { threshold: 0.3 }
);

categories.forEach(cat => observer.observe(cat));

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
  // Show hero-overlay only on first slide
  if (heroOverlay) {
    heroOverlay.style.opacity = currentSlide === 0 ? '1' : '0';
    heroOverlay.style.pointerEvents = currentSlide === 0 ? 'auto' : 'none';
  }
}

function slideTo(slideIndex) {
  const sections = document.querySelectorAll('.scroll-container > section');
  sections[slideIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  currentSlide = slideIndex;
  updateDots();
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
  slideTo(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
  slideTo(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => slideTo(index));
});

updateDots();

// Enable horizontal scrolling with mouse wheel
scrollContainer.addEventListener('wheel', (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});
