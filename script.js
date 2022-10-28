const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.navLink');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hidden');
});