// main.js — Portfolio interactions

// Highlight active nav link
const links = document.querySelectorAll('.nav__links a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = 'var(--color-text)';
  }
});

console.log('Portfolio loaded ✓');
