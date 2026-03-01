// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Subtle scroll-triggered fade-in
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.section-body, .card, .qual, .contact-item, .section-quote blockquote').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Add fade-in CSS dynamically
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .card.fade-in { transition-delay: 0.1s; }
  .card.fade-in:nth-child(2) { transition-delay: 0.2s; }
  .card.fade-in:nth-child(3) { transition-delay: 0.3s; }
  .qual.fade-in:nth-child(2) { transition-delay: 0.1s; }
  .qual.fade-in:nth-child(3) { transition-delay: 0.2s; }
  .qual.fade-in:nth-child(4) { transition-delay: 0.3s; }
  .contact-item.fade-in:nth-child(2) { transition-delay: 0.1s; }
  .contact-item.fade-in:nth-child(3) { transition-delay: 0.2s; }
  .contact-item.fade-in:nth-child(4) { transition-delay: 0.3s; }
`;
document.head.appendChild(style);
