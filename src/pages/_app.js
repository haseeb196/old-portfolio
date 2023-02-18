/* eslint-disable @next/next/no-page-custom-font */
import Mouse from '@/components/Animations/Mousetracker/Mouse';
import Preloader from '@/components/Animations/Preloader/Preloader';
import Sidebar from '@/components/sidebar/sidebarComponent/Sidebar';
import '@/styles/globals.css';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Error404 from '@/components/Animations/404_Animation/Error404';

export default function App({ Component, pageProps }) {
  const mousetrackw = useMediaQuery('(min-width:1024px)');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [error404, setError404] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1950);
    if (
      router.pathname === '/' ||
      router.pathname === '/about' ||
      router.pathname === '/service' ||
      router.pathname === '/projects' ||
      router.pathname === '/contact'
    ) {
      setError404(false);
    } else {
      setError404(true);
    }
  }, [router]);
  return (
    <>
      {!loading ? (
        !error404 ? (
          <div className="flex flex-col xl:flex-row">
            {mousetrackw && <Mouse />}

            <div className="z-30 xl:flex-[0.26] sg:sticky sg:top-0">
              <Sidebar />
              {mousetrackw && <Mouse />}
            </div>

            <div className="xl:flex-[0.93]">
              {' '}
              <Component {...pageProps} />
            </div>
          </div>
        ) : (
          <Error404 />
        )
      ) : (
        <Preloader />
      )}
    </>
  );
}
