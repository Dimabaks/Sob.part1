const hamburger = document.querySelector('.menu-toggle'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active');
});