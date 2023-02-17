/* eslint-disable @next/next/no-page-custom-font */
import Mouse from '@/components/Animations/Mousetracker/Mouse';
import Preloader from '@/components/Animations/Preloader/Preloader';
import Sidebar from '@/components/sidebar/sidebarComponent/Sidebar';
import '@/styles/globals.css';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const mousetrackw = useMediaQuery('(min-width:1024px)');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1950);
  }, []);
  return (
    <>
      {!loading ? (
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
        <Preloader />
      )}
    </>
  );
}
