/* eslint-disable @next/next/no-page-custom-font */
import Homes from '@/components/PagesComponents/home/Homes';

import Head from 'next/head';

export default function Home() {
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
        className={`flex  items-center justify-center !overflow-hidden bg-[#CCC9C9]  xl:!min-h-[100vh] 
          sg:!min-h-[95.3vh]`}
      >
        <Homes />
      </main>
    </>
  );
}
