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
