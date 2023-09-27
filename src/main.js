import 'bootstrap/dist/css/bootstrap.min.css';
import 'wow.js/css/libs/animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css/bundle';

import '@fortawesome/fontawesome-free/js/all.min.js';
import 'https://threejs.org/build/three.js'
import DOTS from 'vanta/dist/vanta.dots.min.js'
import Swiper from 'swiper/bundle';
import WOW from "wow.js/dist/wow.js";

new WOW().init();

DOTS({
    el: '.header',
    THREE,
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
        delay: 4000,
        disableOnInteraction: false
    },
});