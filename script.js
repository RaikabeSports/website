// Menu mobile toggle
const menuBtn = document.querySelector('.menu-mobile');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
