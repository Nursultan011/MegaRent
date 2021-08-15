
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,

    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    }
});
