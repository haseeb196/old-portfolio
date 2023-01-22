/* eslint-disable @next/next/no-page-custom-font */
import '@/styles/globals.css';
import Sidebar from '@/components/sidebar/Sidebar';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}
