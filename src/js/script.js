let hamburger = document.querySelector('.hamburger')
    menu = document.querySelector('.menu')
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

let counter = document.querySelectorAll('.percentage'),
    lines = document.querySelectorAll('.percent__line-grey div');

counter.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});