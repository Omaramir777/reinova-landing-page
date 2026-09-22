// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const el = document.querySelector(a.getAttribute('href'));
  if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
}));

// Add decorative water-drip dividers to each major section (runs once, not on scroll)
document.querySelectorAll('.section, .hero, .download').forEach(sec => {
  const drip = document.createElement('div');
  drip.className = 'water-drip';
  drip.innerHTML = '<span></span><span></span><span></span>';
  sec.prepend(drip);
});

// Reveal sections on scroll
const revealEls = document.querySelectorAll('.reveal-on-scroll, .section, .hero, .download');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}
