let list = document.querySelectorAll('.list a');

list.forEach((ele) => {
    ele.addEventListener('click',() => {
        ele.classList.add('active');
    })
})