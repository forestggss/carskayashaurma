$(document).ready(function(){
    $('.intro__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: '<img class="intro__btn-prev" src="img/btn-prev.svg" alt="">',
        nextArrow: '<img class="intro__btn-next" src="img/btn-next.svg" alt="">',
    });
  });