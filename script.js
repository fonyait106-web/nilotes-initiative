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

// Event button handlers
document.querySelectorAll('.event-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Coming soon, no information on this event yet.');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
