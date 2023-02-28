/* eslint-disable @next/next/no-page-custom-font */
import Mouse from '@/components/Animations/Mousetracker/Mouse';
import Preloader from '@/components/Animations/Preloader/Preloader';
import Cbutton from '@/components/PagesComponents/ContactButton/Cbutton';
import Sidebar from '@/components/sidebar/sidebarComponent/Sidebar';
import '@/styles/globals.css';
import { useMediaQuery } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
      </Head>
      {!loading ? (
        <div className="flex flex-col xl:flex-row">
          {mousetrackw && <Mouse />}
          {sidebar && <Cbutton />}
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
