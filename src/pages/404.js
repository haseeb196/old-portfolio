import Lottie from 'lottie-web';
import Head from 'next/head';
import { useEffect, useRef } from 'react';

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
    <>
      <Head>
        <title>Error 404</title>

        <meta
          name="description"
          content="Error Page"
        />
      </Head>
      <div className="flex h-screen w-screen items-center justify-center">
        <div ref={ref}></div>
      </div>
    </>
  );
};

export default Error404;
