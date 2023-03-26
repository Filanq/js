window.onload = function(){
    let bars = document.querySelectorAll('.user__info__progress');
    bars.forEach(e => {
        let nums = e.children[2].textContent.split('/');
        console.log(nums);
        let percent = String(parseInt(100 / parseInt(nums[1]) * parseInt(nums[0])));
        e.children[1].style = 'background-size: ' + percent + '% 100%;';
    });
}