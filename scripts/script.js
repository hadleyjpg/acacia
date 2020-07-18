const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

/* --------------
     Carousel 
----------------- */

const caroSlide = document.querySelector('.caro-slide');
const caroImages = document.querySelectorAll('.caro-slide img');

//Butons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = caroImages[0].clientWidth;

caroSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Buton Listeners
nextBtn.addEventListener('click', () => {
    if (counter >= caroImages.length -1) return;
    caroSlide.style.transition = "transform .7s ease-in-out";
    counter++;
    caroSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    caroSlide.style.transition = "transform .7s ease-in-out";
    counter--;
    caroSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

caroSlide.addEventListener('transitionend', () => {
    if (caroImages[counter].id === 'lastClone') {
        caroSlide.style.transition = "none";
        counter = caroImages.length - 2;
        caroSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(caroImages[counter].id === 'firstClone') {
        caroSlide.style.transition = "none";
        counter = caroImages.length - counter ;
        caroSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});