$(document).ready(function(){
  $('.brands__link-all').click( function (){
    $('.brands__list').toggleClass('brands__list--visible');
  });
  $('.any-region__inner').click( function (){
    $('.drop-reg').toggleClass('display-block');
  });
  $('.form-car__parametrs').click( function (){
    $('.form-car__hidden').toggleClass('display-block');
    $('.form-car__row--sticky').toggleClass('sticky');
    $(this).children("svg").toggleClass('rotate');
  });
  $('.all-free--all-mark').click( function (){
    $('.list-car__content').toggleClass('max-height');
  });
  $('.ads-mark--all-mark').click( function (){
    $('.ads-mark__list').toggleClass('max-height');
  });
  $('.ads-mark--all-model').click( function (){
    $('.ads-mark__list').toggleClass('max-height');
  });
  $('.ads-mark__all-mark').click( function (){
    $('.ads-mark__list').toggleClass('ads-mark__list--visible');
  });
  $('.payment__elsom').click( function (){
    $('.modal-elsom').addClass('display-block');
  });
  $('.payment__asisnur').click( function (){
    $('.modal-asisnur').addClass('display-block');
  });
  $('.payment__x').click( function (){
    $('.modal').removeClass('display-block');
  });
  $('.button-add--close').click( function (){
    $('.modal').removeClass('display-block');
  });
  $('.ads-photo__item-img').click( function (){
    $('.modal-edit-img').addClass('display-block');
  });
  $('.close-modal-edit-img').click( function (){
    $('.modal-edit-img').removeClass('display-block');
  });
  $('.logo__hum').mouseenter( function (){
    $('.dropdown--hum').css('display', 'flex');
  });
  $('.logo__hum').mouseleave( function (){
    $('.dropdown--hum').css('display', 'none');
  });
  $('.menu__link').mouseenter( function (){
    $(this).children('.dropdown--menu').css('display', 'flex');
  });
  $('.menu__link').mouseleave( function (){
    $('.dropdown--menu').css('display', 'none');
  });
  $('.logo__hum').click( function (){
    $('.menu').addClass('mobile-menu-toggle');
    $('.close-mobile-menu').addClass('close-mobile-menu--active');
  });
  $('.close-mobile-menu').click( function (){
    $('.close-mobile-menu').removeClass('close-mobile-menu--active');
    $('.menu').removeClass('mobile-menu-toggle');
  });
  $('.logo__hum--mobile').click( function (){
    $('.menu-mobile').toggleClass('display-flex');
  });
  $('.close-mobile-menu').click( function (){
    $('.menu-mobile').toggleClass('display-flex');
  });
  $('.js-toggle-options').click( function (e){
    e.preventDefault();
    $(this).siblings(".equipment__content").toggleClass('display-flex');
  });
  $('.js-toggle-options').click( function (e){
    e.preventDefault();
    $(this).children(".equipment__hidden").toggleClass('display-flex');
  });
  $('.equipment-show').click( function (e){
    e.preventDefault();
    $(".equipment__content").toggleClass('equipment--active');
  });
  $('.form-car__label').click( function (){
    $(this).children('.form-car__icon').toggleClass('rotate');
  });
  $('.form-car__label').click( function (){
    if($(this).children('.form-car__dropdownlist').hasClass('form-car__dropdownlist--active')){
      $('.form-car__dropdownlist').removeClass('form-car__dropdownlist--active');
      $(this).children('.form-car__dropdownlist').removeClass('form-car__dropdownlist--active');
    }else{
      $('.form-car__dropdownlist').removeClass('form-car__dropdownlist--active');
      $(this).children('.form-car__dropdownlist').addClass('form-car__dropdownlist--active');
    }
  });
  $('.label-drop').click( function (){
    if($(this).children('.label-drop__dropdownlist').hasClass('label-drop__active')){
      $('.label-drop__dropdownlist').removeClass('label-drop__active');
      $(this).children('.form-car__dropdownlist').removeClass('label-drop__active');
    }else{
      $('.label-drop__dropdownlist').removeClass('label-drop__active');
      $(this).children('.label-drop__dropdownlist').addClass('label-drop__active');
    }
  });

  function inputBgColor(){
    $('.form-car__color').each(function(){
      var carColor = $(this).children('input').val();
      $(this).css('background-color', carColor);

    });
  };
  inputBgColor();
  $('.js-mark-in').click( function (){
    $(this).siblings('.list-car__content').toggleClass('display-flex');
    $(this).children('.list-car__relbig').toggleClass('rotate');
  });
  function setWidthSlid(){
    var widthSlid_Head = $('.content__slid').width()*75/100;
    $('.content__slid').css('height', widthSlid_Head);
    var widthSlid = $(window).width()*47/100;
    var widthSlidItem = $(window).width()*63/100;
    $('.content-list-mob__img-box').css('height', widthSlid);
    $('.content-list-mob__item').css('width', widthSlidItem);
  };
  setWidthSlid();
  function slider(){
    $(".content-list-mob__innser").owlCarousel({
      loop: false,
      center: false,
      touchDrag: true,
      autoWidth: true,
      dots: false,
      dotsEach: false,
      stagePadding: 0,
      margin: 15,
    });
    $("#price-slider").owlCarousel({
      loop: true,
      center: false,
      touchDrag: true,
      autoWidth: true,   
      dots: false,
      dotsEach: true,
      stagePadding: 0,
    });
    $("#card-slider").owlCarousel({
      loop: true,
      center: false,
      touchDrag: true,
      items: 1,   
      dots: false,
      dotsEach: true,
      stagePadding: 0,
    });
    var owl_price_slider = $("#price-slider");
    owl_price_slider.owlCarousel();
    $('.list-car__button--prev').click(function() {
        owl_price_slider.trigger('next.owl.carousel');
    });
    $('.list-car__button--next').click(function() {
        owl_price_slider.trigger('prev.owl.carousel');
    });
   };
   slider();
    $('img').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });
    

});