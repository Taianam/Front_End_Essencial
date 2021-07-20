import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 2,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});