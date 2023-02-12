/* eslint-disable @next/next/no-page-custom-font */
import Mouse from '@/components/Animations/Mousetracker/Mouse';
import Sidebar from '@/components/sidebar/sidebarComponent/Sidebar';
import '@/styles/globals.css';
import { useMediaQuery } from '@mui/material';

export default function App({ Component, pageProps }) {
  const mousetrackw = useMediaQuery('(min-width:1024px)');

  return (
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
  );
}
