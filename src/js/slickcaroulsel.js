import $ from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

$('.slider').slick({
    //dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    infinite: true,
    slidesToShow:1,
    slidesToScroll:1,
    fade: true,
    cssEase: 'linear'
  });
  