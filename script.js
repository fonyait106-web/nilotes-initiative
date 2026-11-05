const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Event modal handlers
const modal = document.getElementById('eventModal');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.event-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

// Hide the "next event" pill once the event date has passed
const pill = document.querySelector('.next-event');
if (pill && pill.dataset.until) {
  const end = new Date(pill.dataset.until + 'T23:59:59');
  if (new Date() > end) pill.style.display = 'none';
}

// Scroll reveal animations
const revealSelector = '.section-heading, .lead-copy, .story-grid > *, .card, .program, .beneficiary-grid > div, .timeline-item, .ecosystem-copy, .person, .event-card, .contact-grid > *, .cta-inner';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
  const items = document.querySelectorAll(revealSelector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('in');
      observer.unobserve(el);
      // Clean up afterwards so hover effects and layout behave normally
      setTimeout(() => {
        el.classList.remove('reveal', 'in');
        el.style.transitionDelay = '';
      }, 1200);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach((el) => {
    const siblings = Array.from(el.parentElement.children).filter((c) => c.matches(revealSelector));
    el.style.transitionDelay = (siblings.indexOf(el) % 5) * 90 + 'ms';
    el.classList.add('reveal');
    observer.observe(el);
  });
}
