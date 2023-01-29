/* eslint-disable @next/next/no-page-custom-font */
import Mouse from '@/components/Animations/Mousetracker/Mouse';
import Sidebar from '@/components/sidebar/sidebarComponent/Sidebar';
import '@/styles/globals.css';
import { useMediaQuery } from '@mui/material';
export default function App({ Component, pageProps }) {
  const mousetrackw = useMediaQuery('(min-width:1024px)');
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="xl:flex-[0.22]">
        {' '}
        <Sidebar />
      </div>
      <div className="xl:flex-[0.78]">
        {' '}
        <Component {...pageProps} />
      </div>
      {mousetrackw && <Mouse />}
    </div>
  );
}
