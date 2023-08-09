//var function menu click
$(function () {
  $(document).ready(function(){
    if($('.js-menu-expand').length > 0){
      $('.js-menu-expand').click(function(e) {
        e.preventDefault();
        var menu = $('.c-menu-wrapper');
        if (menu.hasClass('has-menu-tiny')) {
          $(this).removeClass('active');
          menu.removeClass('has-menu-tiny')
              .slideUp();
        } else {
          $(this).addClass('active');
          menu.addClass('has-menu-tiny')
              .slideDown();
        }
      });
    }
  });
});

//var function demo expand
$(function () {
  $(document).ready(function(){
    if($('.c-knowledge-item').length > 0){
      $('.js-knowledge-expand').click(function(e) {
        e.preventDefault();
        var parent = $(this).parent();
        var root = $(this).parent().parent().parent();
        if (parent.hasClass('active')) {
          parent.removeClass('active');
          $('.c-knowledge-item__detail', parent).slideUp();
        } else {
          $('.c-knowledge-item.active .c-knowledge-item__detail', root).slideUp();
          $('.c-knowledge-item', root).removeClass('active');
          parent.addClass('active');
          $('.c-knowledge-item__detail', parent).slideDown();
        }
      });
    }
  });
});

//var function demo slider
$(function () {
  $(document).ready(function(){
    if($('.js-class-slider-3').length > 0){
      $('.js-class-slider-3').owlCarousel({
        loop:false,
        margin:0,
        responsiveClass:false,
        nav:false,
        dots:false,
        autoplay:false,
        autoHeight:false,
        autoplayTimeout:6000,
        autoplaySpeed:1000,
        autoplayHoverPause:true,
        navText:false,
        responsive:{
          0:{
            items:2
          },
          768:{
            items:3
          }
        }
      });
    }
  });
});

$(function () {
  $(document).ready(function(){
    if($('.owl-carousel').length > 0){
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:false,
        nav:false,
        dots:true,
        autoplay:true,
        autoHeight:true,
        autoplayTimeout:6000,
        autoplaySpeed:1000,
        autoplayHoverPause:true,
        navText:false,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1280:{
              items:1
          }
        }
      });
    }
  });
});

// Go to the next item
$('.customNextBtn').click(function() {
  $('.owl-carousel').trigger('next.owl.carousel',[500]);
})
// Go to the previous item
$('.customPrevBtn').click(function() {
  $('.owl-carousel').trigger('prev.owl.carousel', [500]);
})
