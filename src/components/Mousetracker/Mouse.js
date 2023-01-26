import { useEffect, useState } from 'react';

const Mouse = () => {
  const [mousetrack, setMousetrack] = useState({});
  const mousetrackstyle = {
    transform: `translate(${mousetrack.x}px, ${mousetrack.y}px)`,
    width: '6px',
    height: '6px',
    marginLeft: '-3px',
    marginTop: '-3px',
    transition: `width .3s ease-in-out, height .3s ease-in-out, margin .3s ease-in-out, opacity .3s ease-in-out`,
  };
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousetrack({ x: event.pageX, y: event.pageY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
  return (
    <>
      {' '}
      <div
        className={`pointer-events-none fixed left-0 top-0 z-50 -ml-[15px] -mt-[15px]  h-[30px] w-[30px] rounded-3xl border-[2px] border-solid border-white opacity-80  transition-all duration-700 ease-out`}
        style={{
          transform: `translate(${mousetrack.x}px, ${mousetrack.y}px)`,
        }}
      ></div>
      <div
        className={`pointer-events-none fixed left-0 top-0 z-50   rounded-3xl border-[2px] border-solid   border-white opacity-80`}
        style={mousetrackstyle}
      ></div>
    </>
  );
};

export default Mouse;
