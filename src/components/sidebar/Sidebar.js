import Drawers from '@/components/MuiComponents/Drawers';
import { ModeNight, WbSunny } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { useState } from 'react';
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
        chg ? 'bg-[#FEFCF3]' : 'bg-[#000007]'
      } flex flex-[0.3] flex-col items-start justify-center gap-y-16  px-[70px] text-white shadow-2xl transition-all duration-150 xl:h-[100vh] xl:min-w-[22%] xl:max-w-[23%]`}
    >
      <div>
        <h1
          className={`unboundeds text-[42px] font-[600] uppercase tracking-[0.35rem] ${
            chg ? 'text-black' : 'text-white'
          }`}
        >
          Tokyo
        </h1>
      </div>
      <div>
        <ul
          className={`flex flex-col gap-y-2 text-[19px] capitalize ${
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
          chg ? 'bg-[#000002]' : 'bg-[#F9F9F9]'
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
    <div className="flex flex-row items-center justify-between bg-[#03001C] py-3 text-white">
      <div className="ml-5">
        <h1 className="text-[20px] font-bold uppercase tracking-widest ">
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
