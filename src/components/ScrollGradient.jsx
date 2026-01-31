import React, { useEffect, useState } from 'react';

const ScrollGradient = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = scrolled / documentHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getGradient = () => {
    if (scrollProgress < 0.25) {
      const localProgress = scrollProgress / 0.25;
      return `linear-gradient(to bottom,
        rgb(224, 247, 250) 0%,
        rgb(255, 248, 225) 100%)`;
    } else if (scrollProgress < 0.75) {
      return 'rgb(255, 248, 225)';
    } else {
      const localProgress = (scrollProgress - 0.75) / 0.25;
      return `linear-gradient(to bottom,
        rgb(47, 79, 79) 0%,
        rgb(183, 110, 121) 50%,
        rgb(233, 150, 122) 100%)`;
    }
  };

  return (
    <div
      className="fixed inset-0 -z-30 transition-all duration-1000 ease-out"
      style={{
        background: getGradient()
      }}
    />
  );
};

export default ScrollGradient;
