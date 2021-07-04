const hamburger = document.querySelector('.promo__hamburger'),
      closeElem = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});   

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});  

const progress = document.querySelectorAll('.progress-know__percent'),
      bar = document.querySelectorAll('.progress-know__bar-child');

progress.forEach((el, i) => {
    bar[i].style.width = el.innerHTML;
});