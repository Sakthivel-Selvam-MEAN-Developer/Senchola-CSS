let sliders = document.getElementsByClassName('slide');
let slideIndex = 0;

const showSlide = (slideIndex) => {
    for (let i = 0; i < sliders.length; i++) {
        if (slideIndex == i) {
            sliders[i].setAttribute('style', 'display:block');
        }
        else {
            sliders[i].setAttribute('style', 'display:none')
        }
    }
}

showSlide(slideIndex);

const next = () => {
    if(slideIndex >= sliders.length){
        console.log('called', slideIndex);
        slideIndex = 0;
        showSlide(slideIndex);
    } else {
        console.log('called else', slideIndex);
        showSlide(++slideIndex);
    }
}