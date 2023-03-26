window.onload = function(){
    let progress_bar = document.querySelectorAll('.progress__bar');
    progress_bar.forEach(e => {
        e.style = 'background-size: ' + e.textContent + ' 100%;';
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