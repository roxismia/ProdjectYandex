
const slider = document.querySelector('.slider');
const cards = document.querySelector('.block3__content');
const cardsWidth = document.querySelector('.block3__card');
const offsetWidth = cardsWidth.offsetWidth
let offSet = 0;

function slideRight() {
    const visibleCards = Math.floor(slider.offsetWidth / (offsetWidth + 50));
    console.log(visibleCards)
    const totalCards = document.querySelectorAll('.block3__card').length;
    if (offSet > -(totalCards - visibleCards) * (offsetWidth + 10)) {
        offSet -= offsetWidth + 10;
        console.log(offSet)
        cards.style.transform = `translateX(${offSet}px)`;
        // cards.style.transform = "translateX(400px)";

    }
    else {
        cards.style.transform = "translateX(0)";
    }
}
function sliderLeft () {
    if ( offSet < 0 ) {
        offSet += offsetWidth + 50;
        cards.style.transform = `translateX(${offSet}px)`;
    } else {
        cards.style.transform = "translateX(0)";
    }
}

const slider2 = document.querySelector('.block4__slider');
const ul = slider2.querySelector('.block4__ul');
const lis = ul.querySelectorAll('li');

let position = 0;

setInterval(() => {
    lis.forEach(li => {
        li.style.transform = `translateX(${position}px)`;
    });
    position--;
    
    if (position < -lis[0].offsetWidth) {
        position = window.innerWidth;
    }
}, 10);

const slider3 = document.querySelector('.block5__slider');
const ul1 = slider3.querySelector('.block5__ul');
const lis1 = ul1.querySelectorAll('li');

let position1 = 0;

setInterval(() => {
    lis1.forEach(li => {
        li.style.transform = `translateX(${position1}px)`; 
    });
    position1--;
    
    if (position1 < -lis1[0].offsetWidth) { 
        position1 = window.innerWidth;
    } 
}, 10);