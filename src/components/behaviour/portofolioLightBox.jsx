import { useEffect } from 'react';
import GLightbox from 'glightbox';

const PortfolioLightbox = () => {
  useEffect(() => {
    GLightbox({
      selector: '.portfolio-lightbox'
    });
  }, []);

  return null; // No visual elements returned since this is for functionality
};

export default PortfolioLightbox;
