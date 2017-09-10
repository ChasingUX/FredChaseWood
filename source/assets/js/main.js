$(function () {
  var slickHome = $('.Slide-container');

  if ($(window).width() > 500) {
    slickHome.slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
      swipe: false,
      pauseOnHover: false
    });
  }

  var slickSingle = $('.Slide-container-single');

  slickSingle.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    speed: 600,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          centerPadding: '15px',
        }
      }
    ]
  })

  $(".image_grid img").unveil(1500, function() {
    var $thisImage = $(this)

    $thisImage.load(function() {
      $thisImage.addClass('is-visible');
    });
  });



  $('.tags_container').tagSort({
    items: '.image_grid li',
    tagElement: 'li',
    tagClassPrefix: false,
    tagAttr: 'data-type',
    itemTagsView: false,
    itemTagsSeperator: ' ',
    itemTagsElement: false,
    sortType: 'single',
    fadeTime: 0
  });


  $('.tags_container').on('click', 'li', function(e){
    e.preventDefault();

    $('.all').removeClass('tagsort-active');

    if($(this).hasClass('all')) {
      $('.image_grid li').show();
      $(this).addClass('tagsort-active');
    }
  });

  var Slider = $('.Slide-container-single');
  Slider.on('click', '.slick-slide', function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");
    if (Slider.slick('slickCurrentSlide') !== index) {
      Slider.slick('slickGoTo', index);
    }
  });

  $('.shop a').on('click', function(e){
    if($('body').hasClass('index')) {
      e.preventDefault();

      var scrollTop     = $(window).scrollTop(),
        elementOffset = $('.Wrapper--work').offset().top,
        distance      = (elementOffset - scrollTop);

        $('html, body').animate({
            scrollTop: distance
        });
    }
  });
});
