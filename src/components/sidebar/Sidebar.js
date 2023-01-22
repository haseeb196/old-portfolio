import { ModeNight, Menu, WbSunny } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import Drawers from '@/components/MuiComponents/Drawers';
const Sidebar = () => {
  const [chg, setChg] = useState(false);
  const media = useMediaQuery('(min-width:1200px)');
  const colorchanger = () => {
    if (chg === false) {
      setChg(true);
    } else if (chg === true) {
      setChg(false);
    }
  };
  return media ? (
    <div
      className={`${
        chg ? 'bg-[#FEFCF3]' : 'bg-[#03001C]'
      } shadow-2xl flex flex-col text-white xl:max-w-[23%] xl:min-w-[22%]  xl:h-[100vh] justify-center items-start gap-y-16 px-[70px] transition-all duration-150 fixed`}
    >
      <div>
        <h1
          className={`text-[42px] tracking-[0.35rem] font-[600] uppercase unboundeds ${
            chg ? 'text-black' : 'text-white'
          }`}
        >
          Tokyo
        </h1>
      </div>
      <div>
        <ul
          className={`flex gap-y-2 flex-col text-[19px] capitalize ${
            chg ? 'text-black' : 'text-white'
          }`}
        >
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/service'}>Service</Link>
          </li>
          <li>
            <Link href={'/projects'}>projects</Link>
          </li>
          <li>
            <Link href={'/news'}>News</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className={`${chg ? 'text-gray-500' : 'text-gray-400'}`}>
        <p>@2022 Tokyo</p>
        <p>Created by Me</p>{' '}
      </div>
      <div
        className={`mt-[-25px] shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] ${
          chg ? 'bg-[#03001C]' : 'bg-[#F9F9F9]'
        } rounded-3xl p-1`}
      >
        <IconButton
          onClick={colorchanger}
          className="shadow-2xl"
        >
          {chg ? (
            <WbSunny
              htmlColor="white"
              style={{ transition: 'all', transitionDuration: '130ms' }}
            />
          ) : (
            <ModeNight
              htmlColor="gray"
              style={{ transition: 'all', transitionDuration: '130ms' }}
            />
          )}
        </IconButton>
      </div>
    </div>
  ) : (
    <div className="flex flex-row justify-between items-center bg-[#03001C] text-white py-3">
      <div className="ml-5">
        <h1 className="uppercase text-[20px] font-bold tracking-widest ">
          tokoyo
        </h1>
      </div>
      <div className="mr-5">
        <Drawers />
      </div>
    </div>
  );
};

export default Sidebar;
