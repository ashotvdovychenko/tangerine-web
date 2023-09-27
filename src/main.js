import 'bootstrap/dist/css/bootstrap.min.css';
import 'wow.js/css/libs/animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'swiper/css/bundle';

import '@fortawesome/fontawesome-free/js/all.min.js'
import Swiper from 'swiper/bundle';
import WOW from "wow.js/dist/wow.js";

new WOW().init();

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