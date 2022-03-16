$(function () {
    var slider = $('.carousel').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 8000
    });
});