import 'bootstrap/dist/css/bootstrap.min.css';
import 'wow.js/css/libs/animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

import '@fortawesome/fontawesome-free/js/all.min.js'
import WOW from "wow.js/dist/wow.js";

new WOW().init();

import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

new Swiper('.dishes-slider', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
});