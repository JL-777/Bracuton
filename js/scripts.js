(function(){
    'use strict'
    document.addEventListener('DOMContentLoaded', function(){

/*Function slider home page*/ 
      var mediaQ = window.matchMedia("(max-width: 767px)")
      var index = document.querySelector('.index-page')

        function indexSliderFull(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
                },
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              });
        }

        function indexSliderMin(){
          var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }

        function slideComplete(){
          if(mediaQ.matches){
            indexSliderMin();
          } else {
            indexSliderFull();
          }
        }

        slideComplete();

    });
})();

$(document).ready(function(){
  $('#mobile-menu').click(function(){
    $('nav').toggleClass('active')
  });
})