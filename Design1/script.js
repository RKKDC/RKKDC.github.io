const categories = document.querySelectorAll('.category');

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
