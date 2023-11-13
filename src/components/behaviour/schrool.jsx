// ScrollListener.jsx

import { useEffect } from 'react';

const ScrollListener = () => {
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    const navbarlinks = document.querySelectorAll('#navbar .scrollto');

    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      navbarlinksActive();
    };

    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // No visual elements returned since this is just handling the scroll functionality
};

export default ScrollListener;
