import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function Bubble() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const bubblesRef = useRef([]);
  const bubblesre = (el) => {
    bubblesRef.current.push(el);
  };
  useEffect(() => {
    const bubbles = bubblesRef.current;
    const tl = gsap.timeline({ repeat: -1 });

    bubbles.forEach((bubble) => {
      tl.duration(
        bubble,
        3,
        {
          x: Math.random() * 800 - 400,
          y: Math.random() * 800 - 400,
          scale: Math.random() + 0.5,
          opacity: Math.random(),
          ease: 'Power1.easeOut',
        },
        Math.random() * 3,
      );
    });
  }, []);

  return (
    <div ref={containerRef}>
      <image
        ref={logoRef}
        src="https://assets.rocketstock.com/uploads/2016/05/a-1000x576.jpg"
        alt="Logo"
      />
      <div
        ref={(el) => bubblesre(el)}
        className="bubble"
      />
      <div
        ref={(el) => bubblesre(el)}
        className="bubble"
      />
      <div
        ref={(el) => bubblesre(el)}
        className="bubble"
      />
      <div
        ref={(el) => bubblesre(el)}
        className="bubble"
      />
    </div>
  );
}

export default Bubble;
