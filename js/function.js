$(document).ready(function () {
  $(".intro__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: '<img class="intro__btn-prev" src="img/btn-prev.svg" alt="">',
    nextArrow: '<img class="intro__btn-next" src="img/btn-next.svg" alt="">',
});
$(".reviews__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: '<img class="reviews__slider-btn--back" src="img/reviews__btn--back.svg" alt="">',
    nextArrow: '<img class="reviews__slider-btn--next" src="img/reviews__btn--next.svg" alt="">',
});
});
