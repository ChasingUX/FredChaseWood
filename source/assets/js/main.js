$(function () {

  // var sliderOn = false;
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
    centerPadding: 36,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          centerPadding: 15,
        }
      }
    ]
  })



  $(".image_grid img").unveil(300, function() {
    var $thisImage = $(this)

    $thisImage.load(function() {
      $thisImage.addClass('is-visible');
    });
  });

    // sliderOn = true;

  // $(window).on('resize', function () {
  //   var currentWidth = $(window).width();

  //   console.log(sliderOn)


  //   if (currentWidth > 500) {
  //     sliderOn = true;
  //   } else {
  //     sliderOn = false;
  //   }
  //   // Do something.
  // });


});
