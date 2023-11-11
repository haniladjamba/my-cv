import { useEffect } from 'react';
import Swiper from 'swiper';

const PortfolioDetailsSlider = () => {
  useEffect(() => {
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }, []);

  return null; // No visual elements returned since this is for functionality
};

export default PortfolioDetailsSlider;
