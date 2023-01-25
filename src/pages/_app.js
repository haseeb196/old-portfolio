/* eslint-disable @next/next/no-page-custom-font */
import Sidebar from '@/components/sidebar/sidebarComponent/Sidebar';
import '@/styles/globals.css';
export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col xl:flex-row">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}
