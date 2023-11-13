// PortfolioIsotope.jsx
import { useEffect } from 'react';
import Isotope from 'isotope-layout';
import AOS from 'aos';

const PortfolioIsotope = () => {
  useEffect(() => {
    const handlePortfolioFilters = () => {
      const portfolioContainer = document.querySelector('.portfolio-container');
      if (portfolioContainer) {
        const portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item'
        });

        const portfolioFilters = document.querySelectorAll('#portfolio-flters li');

        portfolioFilters.forEach((el) => {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            portfolioFilters.forEach((filterEl) => {
              filterEl.classList.remove('filter-active');
            });
            el.classList.add('filter-active');

            portfolioIsotope.arrange({
              filter: el.getAttribute('data-filter')
            });

            portfolioIsotope.on('arrangeComplete', () => {
              AOS.refresh();
            });
          });
        });
      }
    };

    handlePortfolioFilters();
  }, []);

  return null; // No visual elements returned since this is for functionality
};

export default PortfolioIsotope;
