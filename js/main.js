console.log('Hello World');

$('.concept').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#concept").offset().top
    }, 500);    
});

$('.member').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#member").offset().top
    }, 500);    
});

$('.memory').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#memory").offset().top
    }, 500);    
});

$('.contact').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);    
});
// 最後の数値（500）はmsで目的地まで到達するのに0.3秒かかる

$('.collection-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay:true,
    autoplaySpeed:3000,
    arrows: true,
  });

  $('.to-top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500, 'swing')
})