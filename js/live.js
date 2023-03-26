let items = document.querySelectorAll('.life__item');
let max = 0;
items.forEach(e => {
    let wd = e.children[0].getBoundingClientRect().width;
    max = wd ? wd > max : wd;
});
items.forEach(e => {
    e.children[0].style.width = 'max';
});
