$(document).ready(function () {
    $(".pd-slider-section").owlCarousel({
        items: 5,
        loop: false,
        nav: true,
        navText: ["<", ">"],
        margin: 10,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});