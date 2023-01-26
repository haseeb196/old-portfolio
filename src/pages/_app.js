/* eslint-disable @next/next/no-page-custom-font */
import Mouse from '@/components/Mousetracker/Mouse';
import Sidebar from '@/components/sidebar/sidebarComponent/Sidebar';
import '@/styles/globals.css';
import { useMediaQuery } from '@mui/material';
export default function App({ Component, pageProps }) {
  const mousetrackw = useMediaQuery('(min-width:1024px)');
  return (
    <div className="flex flex-col overflow-hidden xl:flex-row">
      <Sidebar />
      <Component {...pageProps} />
      {mousetrackw && <Mouse />}
    </div>
  );
}
