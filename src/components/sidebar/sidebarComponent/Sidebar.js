import Drawers from '@/components/Animations/MuiComponents/Drawers';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
const Sidebar = () => {
  const router = useRouter();

  const media = useMediaQuery('(min-width:1200px)');

  return media ? (
    <div
      className={`
       shadow-box
       flex flex-col items-start justify-center gap-y-16 bg-[#3C3939]  px-[70px] text-white  xl:fixed xl:h-[100vh] xl:min-w-[22%] xl:max-w-[23%]`}
    >
      <div>
        <h1
          className={`glow text-[40px] font-[700]  uppercase
          tracking-[0.35rem] text-white`}
        >
          Tokyo
        </h1>
      </div>
      <div>
        <ul
          className={`font-roboto-condensed flex flex-col gap-y-2  text-[22px] capitalize transition-all duration-100`}
        >
          <li>
            <Link
              href={'/'}
              className={`${
                router.pathname == '/' ? 'text-white' : 'text-gray-400'
              } transition-all duration-100 ease-in-out hover:text-white`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/about'}
              className={`${
                router.pathname == '/about' ? 'text-white' : 'text-gray-400'
              } transition-all duration-100 ease-in-out hover:text-white`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={'/service'}
              className={`${
                router.pathname == '/service' ? 'text-white' : 'text-gray-400'
              } transition-all duration-100 ease-in-out hover:text-white`}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              href={'/projects'}
              className={`${
                router.pathname == '/projects' ? 'text-white' : 'text-gray-400'
              } transition-all duration-100 ease-in-out hover:text-white`}
            >
              projects
            </Link>
          </li>

          <li>
            <Link
              href={'/contact'}
              className={`${
                router.pathname == '/contact' ? 'text-white' : 'text-gray-400'
              } transition-all duration-100 ease-in-out hover:text-white`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={`font-roboto-condensed text-gray-400`}>
        <p>@2022 Tokyo</p>
        <p>Created by Me</p>{' '}
      </div>
    </div>
  ) : (
    <div className="flex flex-row items-center justify-between bg-[#3C3939] py-3 text-white">
      <div className="ml-5">
        <h1 className="glow text-[20px] font-bold uppercase tracking-widest">tokoyo</h1>
      </div>
      <div className="mr-5">
        <Drawers />
      </div>
    </div>
  );
};

export default Sidebar;
