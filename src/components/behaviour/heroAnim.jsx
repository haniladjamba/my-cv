import { useState, useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const [typedInstance, setTypedInstance] = useState(null);

  useEffect(() => {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      const typedStrings = ['game developer', 'web developer', 'illustrator'];

      const options = {
        strings: typedStrings,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        cursorChar: '', // Removing cursor for the entire text
      };

      const newTypedInstance = new Typed('.typed', options);
      setTypedInstance(newTypedInstance);

      return () => {
        // Destroy the Typed instance on unmount
        if (typedInstance) {
          typedInstance.destroy();
        }
      };
    }
  }, []);

  return <span className="typed" />;
};

export default TypedText;
