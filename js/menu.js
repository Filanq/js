let openBtn = document.querySelector('.burger__btn');
let closeBtn = document.querySelector('.cross__btn');
let menu = document.querySelector('.menu');
openBtn.addEventListener('click', () => {
    menu.classList.add('menu--active');
});
closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu--active');
});

let acc__btn = document.querySelector('.btn__account');
let inner = document.querySelector('.btn__yellow--inner');
acc__btn.addEventListener('mouseover', () => {
    clearTimeout(window.tim);
    inner.classList.add('btn__yellow--inner--active');
});
acc__btn.addEventListener('mouseout', () => {
    window.tim = setTimeout(() => {
        inner.classList.remove('btn__yellow--inner--active');
    }, 400);
});
acc__btn.addEventListener('onclick', () => {
    inner.classList.toggle('btn__yellow--inner--active');
});
