let openBtn = document.querySelector('.burger__btn');
let closeBtn = document.querySelector('.cross__btn');
let menu = document.querySelector('.menu');
openBtn.addEventListener('click', () => {
    menu.classList.add('menu--active');
});
closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu--active');
});
console.log(openBtn);
console.log(closeBtn);
console.log(menu);

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

let arr__lessons = document.querySelectorAll('.lessons__arrow');
arr__lessons.forEach(e => {
    e.addEventListener('click', () => {
        let cards = e.previousElementSibling.children;
        for(let i of cards){
            i.style.display = 'block';
        }
        e.style.display = 'none';
    });
});
console.log(window.outerWidth);

let progress_bar = document.querySelectorAll('.progress__bar');
if(progress_bar[0]){
    progress_bar.forEach(e => {
        e.style = 'background-size: 0;'
        setTimeout(() => {
            e.style = 'transition: background-size 1s ease-in-out; background-size: ' + e.textContent + ';';
        }, 40);
    });

}

let progress_circ = document.querySelector('.progress__img--circle');
if(progress_circ){
    progress_circ.childNodes.forEach(elem => {
        elem.style = 'width: 50%; height: 0;'
        setTimeout(() => {
            elem.style = 'transition: height 1s ease-in-out; height: ' + progress_circ.previousElementSibling.textContent + ';';
        }, 1);
    })
}