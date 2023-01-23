/* eslint-disable @next/next/no-page-custom-font */
import Homes from '@/components/home/Homes';
import { ModeNight, WbSunny } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [colors, setColors] = useState(true);
  const media = useMediaQuery('(min-width:1200px)');
  const media2 = useMediaQuery('(max-width:1200px)');
  const colorchanger = () => {
    if (colors === true) {
      setColors(false);
    } else if (!colors) {
      setColors(true);
    }
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
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
        className={`flex flex-[1.3] items-center justify-center xl:flex-row sg:min-h-[80vh] sg:flex-col   ${
          !media2 ? (colors ? 'bg-[#f1f1ed]' : 'bg-[#03001C]') : 'bg-white'
        } transition-all duration-100`}
      >
        {media ? (
          colors ? (
            <button
              onClick={colorchanger}
              className="absolute bottom-7 right-8 rounded-3xl bg-[#03001C] p-3 shadow-2xl transition-all duration-100"
            >
              <ModeNight htmlColor="white" />
            </button>
          ) : (
            <button
              onClick={colorchanger}
              className="absolute bottom-7 right-8 rounded-3xl bg-[#FEFCF3] p-3 shadow-2xl transition-all duration-100"
            >
              <WbSunny htmlColor="gray" />
            </button>
          )
        ) : (
          <></>
        )}{' '}
        <Homes color={colors} />
      </main>
    </>
  );
}
