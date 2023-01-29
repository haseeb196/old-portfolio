import Drawers from '@/components/Animations/MuiComponents/Drawers';
import { ModeNight, WbSunny } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
const Sidebar = () => {
  const router = useRouter();

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
        chg ? 'bg-[#E0E0E0]' : 'bg-[#000007]'
      } flex  flex-col items-start justify-center gap-y-16  px-[70px] text-white shadow-2xl transition-all duration-150 xl:fixed xl:h-[100vh] xl:min-w-[22%] xl:max-w-[23%] sg:!sticky sg:!top-0`}
    >
      <div>
        <h1
          className={`text-[42px] font-[700] uppercase tracking-[0.35rem] ${
            chg ? 'text-black' : 'text-white'
          }`}
        >
          Tokyo
        </h1>
      </div>
      <div>
        <ul
          className={`flex flex-col gap-y-2 text-[19px] capitalize transition-all duration-100`}
        >
          <li>
            <Link
              href={'/'}
              className={`${
                router.pathname == '/'
                  ? chg
                    ? 'text-black'
                    : 'text-white'
                  : 'text-gray-400'
              } transition-all duration-100 ease-in-out ${
                chg ? 'hover:text-black' : 'hover:text-white'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/about'}
              className={`${
                router.pathname == '/about'
                  ? chg
                    ? 'text-black'
                    : 'text-white'
                  : 'text-gray-400'
              } transition-all duration-100 ease-in-out ${
                chg ? 'hover:text-black' : 'hover:text-white'
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={'/service'}
              className={`${
                router.pathname == '/service'
                  ? chg
                    ? 'text-black'
                    : 'text-white'
                  : 'text-gray-400'
              } transition-all duration-100 ease-in-out ${
                chg ? 'hover:text-black' : 'hover:text-white'
              }`}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              href={'/projects'}
              className={`${
                router.pathname == '/projects'
                  ? chg
                    ? 'text-black'
                    : 'text-white'
                  : 'text-gray-400'
              } transition-all duration-100 ease-in-out ${
                chg ? 'hover:text-black' : 'hover:text-white'
              }`}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              href={'/news'}
              className={`${
                router.pathname == '/news'
                  ? chg
                    ? 'text-black'
                    : 'text-white'
                  : 'text-gray-400'
              } transition-all duration-100 ease-in-out ${
                chg ? 'hover:text-black' : 'hover:text-white'
              }`}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href={'/contact'}
              className={`${
                router.pathname == '/contact'
                  ? chg
                    ? 'text-black '
                    : 'text-white'
                  : 'text-gray-400'
              } transition-all duration-100 ease-in-out ${
                chg ? 'hover:text-black' : 'hover:text-white'
              }`}
            >
              Contact
            </Link>
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
          {!chg ? (
            <WbSunny
              htmlColor="gray"
              style={{ transition: 'all', transitionDuration: '130ms' }}
            />
          ) : (
            <ModeNight
              htmlColor="white"
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
