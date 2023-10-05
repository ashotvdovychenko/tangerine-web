import 'bootstrap/dist/css/bootstrap.min.css';
import 'wow.js/css/libs/animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css/bundle';

import advantages from '../assets/advantages-image.png';
import questions from '../assets/questions-image.png';
import pizza from '../assets/pizza.png';
import burger from '../assets/burger.png';
import sushi from '../assets/sushi.png';
import cookies from '../assets/cookies.png';
import pancake from '../assets/pancake.png';

import 'bootstrap/js/dist/collapse.js';
import '@fortawesome/fontawesome-free/js/all.min.js';
import 'https://threejs.org/build/three.js';
import DOTS from 'vanta/dist/vanta.dots.min';
import Swiper from 'swiper/bundle';
import WOW from "wow.js/dist/wow.js";

new WOW().init();

DOTS({
    el: '.header',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00000,
    backgroundColor: 0xFFF1BF,
    size: 3.60,
    spacing: 63.00,
    showLines: false
})

new Swiper('.dishes-slider', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
});

document.querySelector('#advantages-image').src = advantages
document.querySelector('#questions-image').src = questions
document.querySelector('#pizza').src = pizza
document.querySelector('#burger').src = burger
document.querySelector('#sushi').src = sushi
document.querySelector('#cookies').src = cookies
document.querySelector('#pancake').src = pancake