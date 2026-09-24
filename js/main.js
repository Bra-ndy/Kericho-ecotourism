// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('open');
  });
});