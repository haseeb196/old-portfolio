import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

const Error404 = () => {
  const ref = useRef(null);
  useEffect(() => {
    const dawg = ref.current;
    const instance = Lottie.loadAnimation({
      container: dawg,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/error404/error34.json',
    });
    return () => instance.destroy();
  });

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div ref={ref}></div>
    </div>
  );
};

export default Error404;
