const sections = document.querySelectorAll('.section-3d');
const container = document.querySelector('.scroll-container-3d');

let currentSlide = 0;
const totalSlides = sections.length;
let isScrolling = false;
const scrollDelay = 1000; // Delay between scroll events (ms)

function updateSlide() {
  sections.forEach((section, index) => {
    section.classList.remove('active', 'prev', 'next');
    
    if (index === currentSlide) {
      section.classList.add('active');
    } else if (index < currentSlide) {
      section.classList.add('prev');
    } else {
      section.classList.add('next');
    }
  });
}

function nextSlide() {
  if (!isScrolling) {
    isScrolling = true;
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateSlide();
    setTimeout(() => {
      isScrolling = false;
    }, scrollDelay);
  }
}

function prevSlide() {
  if (!isScrolling) {
    isScrolling = true;
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    updateSlide();
    setTimeout(() => {
      isScrolling = false;
    }, scrollDelay);
  }
}

// Scroll wheel navigation
document.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
}, { passive: false });

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    nextSlide();
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    prevSlide();
  }
});

// Touch/swipe navigation
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  if (touchStartY - touchEndY > 50) {
    nextSlide(); // Swipe up
  } else if (touchEndY - touchStartY > 50) {
    prevSlide(); // Swipe down
  }
});

updateSlide();
