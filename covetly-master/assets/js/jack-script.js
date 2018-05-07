$(document).ready(function(){
  $('.main-slider').slick({
    dots:true,
    arrows:false,
    adaptiveHeight: true
  });
  $('.thumb-slider').slick({
    dots:false,
    arrows:true,
    slidesToShow:10,
    slidesToScroll:10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  $('.rb-items').slick({
    dots:false,
    arrows:false,
    slidesToShow:5,
    slidesToScroll:5,
    autoplay:true,
    infinite:true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.bs-slide').slick({
    dots:false,
    arrows:false,
    slidesToShow:4,
    slidesToScroll:4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.bs-nav-prev').click(function(e){
    e.preventDefault();
    var target = $(this).data('target');
    $(target).slick('slickPrev');
  });
  $('.bs-nav-next').click(function(e){
    e.preventDefault();
    var target = $(this).data('target');
    $(target).slick('slickNext');
  });

  //product detail
  $('.main-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.nav-image'
  });
  $('.nav-image').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.main-image',
    // centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#price_slider').ionRangeSlider({
    type:'double'
  });
  //collapse sidebar product category
  if($(window).width() <= 991){
    $('.sb-title').removeClass('opened');
    $('.sb-collapse').removeClass('in');
  }
  $(window).resize(function(){
    if($(window).width() <= 991){
      $('.sb-title').removeClass('opened');
      $('.sb-collapse').removeClass('in');
    }
    if($(window).width() >= 992){
      $('.sb-title').addClass('opened');
      $('.sb-collapse').addClass('in');
    }
  });
  $('.sb-collapse').on('hide.bs.collapse', function () {
    $('.sb-title').removeClass('opened');
  });
  $('.sb-collapse').on('show.bs.collapse', function () {
    $('.sb-title').addClass('opened');
  });

$('.sb-faq-menu >li>a').on('shown.bs.tab',function(e){
  var targetN = $(e.target).attr('href');
  var targetO = $(e.relatedTarget).attr('href');
  var elemenN = $('.sb-faq-menu >li>a[href="'+targetN+'"]');
  var elemenO = $('.sb-faq-menu >li>a[href="'+targetO+'"]');
  elemenN.parent().addClass('active');
  elemenO.parent().removeClass('active');
  // console.log(elemenN.parent());
})

$('.faq-accordion .panel-collapse').on('shown.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-plus").addClass("fa-minus");
});

$('.faq-accordion .panel-collapse').on('hidden.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-minus").addClass("fa-plus");
});


});
