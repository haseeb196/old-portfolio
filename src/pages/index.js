/* eslint-disable @next/next/no-page-custom-font */
import Homes from '@/components/PagesComponents/home/Homes';
import { useMediaQuery } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  const minheight = useMediaQuery('(min-height:925px)');

  return (
    <>
      <Head>
        <title>Personal-Portfolio</title>
        <meta
          name="description"
          content="Home Page"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main
        className={`flex  items-center justify-center !overflow-hidden xl:!min-h-[100vh]  sg:min-h-[93vh]   ${
          minheight && '!min-h-[96vh]'
        }  bg-[#CCC9C9]`}
      >
        <Homes />
      </main>
    </>
  );
}
