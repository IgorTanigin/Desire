$(function(){
   $('.header__btn').on('click', function(){
    $('.rightside-menu').removeClass('rightside-menu--close')
   });
   $('.rightside-menu__close').on('click', function(){
    $('.rightside-menu').addClass('rightside-menu--close')
   });

   $('.header__btn-menu').on('click', function(){
      $('.menu').toggleClass('menu--open');
     });

   $('.top__slider').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true
   });
   $('.gallery__tab-link').on('click', function(e){
      e.preventDefault();
      $('.gallery__tab-link').removeClass('gallery__tab-link--active');
      $(this).toggleClass('gallery__tab-link--active');
   });
   
   $('.gallery__tab-link').on('click', function(e){
      $('.gallery__content-item').removeClass('gallery__content-item--active');
      $($(this).attr('href')).toggleClass('gallery__content-item--active');
  });

  $('.gallery-page__btn').on('click', function(){
   $('.gallery-page__btn').removeClass('gallery-page__btn--active');
   $(this).toggleClass('gallery-page__btn--active');
  });

  $('.blog-page__slider').slick({
      arrows: true,
      prevArrow: '<button type="button" class="blog__slick-prev"><img src="images/icons/arrow-slide-left.svg" alt="slide left"></button>',
      nextArrow: '<button type="button" class="blog__slick-next"><img src="images/icons/arrow-slide-right.svg" alt="slide right"></button>'
  });
  $('.contacts-slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 10,
      slidesToScroll: 10,
      responsive: [
         {
           breakpoint: 1780,
           settings: {
             slidesToShow: 8,
             slidesToScroll: 8,
           }
         },
         {
           breakpoint: 1500,
           settings: {
             slidesToShow: 6,
             slidesToScroll: 6,
           }
         },
         {
           breakpoint: 940,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 4,
           }
         },
         {
            breakpoint: 855,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 10,
            }
          }
       ]
  });

  var mixer = mixitup('.gallery-page__content', {
   load:{
      filter: '.category-living-room'
   }
  });
});
