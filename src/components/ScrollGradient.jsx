import React, { useEffect, useState } from 'react';

const ScrollGradient = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Keep a lightweight listener in case we later want subtle parallax or effects.
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = documentHeight > 0 ? scrolled / documentHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Single continuous gradient from soft sunrise at top to warm sunset at bottom
  const getGradient = () =>
    `linear-gradient(
      to bottom,
      #FFF8E9 0%,
      #FFE6C7 25%,
      #FDD2B0 50%,
      #F7B6A8 75%,
      #E48A8C 100%
    )`;

  return (
    <div
      className="fixed inset-0 -z-30 transition-all duration-1000 ease-out max-w-full overflow-hidden"
      style={{
        background: getGradient()
      }}
    />
  );
};

export default ScrollGradient;
