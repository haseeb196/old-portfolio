/* eslint-disable @next/next/no-page-custom-font */
import Mouse from '@/components/Animations/Mousetracker/Mouse';
import Preloader from '@/components/Animations/Preloader/Preloader';
import Sidebar from '@/components/sidebar/sidebarComponent/Sidebar';
import '@/styles/globals.css';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const mousetrackw = useMediaQuery('(min-width:1024px)');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1750);
    if (
      router.pathname === '/' ||
      router.pathname === '/about' ||
      router.pathname === '/service' ||
      router.pathname === '/projects' ||
      router.pathname === '/contact'
    ) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  }, [router]);
  return (
    <>
      {!loading ? (
        <div className="flex flex-col xl:flex-row">
          {mousetrackw && <Mouse />}

          <div className="z-30 xl:flex-[0.26] sg:sticky sg:top-0">
            {sidebar && <Sidebar />}
            {mousetrackw && <Mouse />}
          </div>

          <div className="xl:flex-[0.93]">
            {' '}
            <Component {...pageProps} />
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}
