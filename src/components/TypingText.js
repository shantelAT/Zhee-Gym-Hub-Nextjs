import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingText = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["Dieting", "Working-Out", "Shopping"],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true
    });
  }, []);

  return (
    <div>
      <h2 ></h2>
    </div>
  );
};

export default TypingText;