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

// Back to top button
document.querySelectorAll('a[href="#top"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
