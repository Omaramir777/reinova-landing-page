// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const el = document.querySelector(a.getAttribute('href'));
  if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
}));

// Booking tabs: wash/packages vs subscription
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.process-panel');
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  const target = tab.dataset.tab;
  panels.forEach(p => p.classList.toggle('active', p.dataset.panel === target));
}));

// Hero app-mock: cycle the highlighted step to preview the flow
const appSteps = document.querySelectorAll('.app-step');
if (appSteps.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let current = 0;
  setInterval(() => {
    appSteps[current].classList.remove('active');
    current = (current + 1) % appSteps.length;
    appSteps[current].classList.add('active');
  }, 2400);
}

// Reveal sections on scroll
const revealEls = document.querySelectorAll('.reveal-on-scroll');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}
