import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-[#03001C] flex flex-col text-white xl:max-w-[23%] xl:min-w-[22%]  h-[100vh] justify-center items-start gap-y-16 px-[70px]">
      <div>
        <h1 className="text-[42px] tracking-[0.35rem] unbound-font font-[600] uppercase">
          Tokyo
        </h1>
      </div>
      <div>
        <ul>
          <li>
            <Link href={''}>Home</Link>
          </li>
          <li>
            <Link href={''}>About</Link>
          </li>
          <li>
            <Link href={''}>Service</Link>
          </li>
          <li>
            <Link href={''}>Portfolio</Link>
          </li>
          <li>
            <Link href={''}>News</Link>
          </li>
          <li>
            <Link href={''}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="text-gray-400 ">
        <p>@2022 Tokyo</p>
        <p>Created by Me</p>{' '}
      </div>
      <div>
        <button>Color</button>
      </div>
    </div>
  );
};

export default Sidebar;
