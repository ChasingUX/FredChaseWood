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
    infinite: true,
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

  $(".image_grid img").unveil(1000, function() {
    var $thisImage = $(this)

    $thisImage.load(function() {
      $thisImage.addClass('is-visible');
    });
  });

  // $(".image_grid li").each(function(){

  // });

  $('.tags_container').tagSort({
    items: '.image_grid li',
    tagElement: 'li',
    tagClassPrefix: false,
    itemTagsView: false,
    itemTagsSeperator: ' ',
    itemTagsElement: false,
    sortType: 'inclusive',
    tagAttr: 'data-type',
    fadeTime: 0
  });

  var Slider = $('.Slide-container-single');
  Slider.on('click', '.slick-slide', function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");
    if (Slider.slick('slickCurrentSlide') !== index) {
      Slider.slick('slickGoTo', index);
    }
  });
});
