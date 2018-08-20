$(document).ready(function(){
    $('.home-slide').slick({
        arrows: true,
        dots: true
    });
    $('.reviews-slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
    });
  });
 