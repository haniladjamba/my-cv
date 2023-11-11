// TypedText.jsx
import { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  useEffect(() => {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      let typedStrings = ['game developer', 'web developer', 'illustrator'];
      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }, []);

  return <span className="typed" />;
};

export default TypedText;
