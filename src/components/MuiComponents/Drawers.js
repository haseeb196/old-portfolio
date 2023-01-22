import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import { Clear, Menu } from '@mui/icons-material';
import Link from 'next/link';
const Drawers = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        color="#FFFFFF"
        onClick={() => setOpen(true)}
      >
        <Menu style={{color : 'white'}} />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor={'right'}
      >
      <div><Clear /></div>
      <div>
        <ul className={`flex gap-y-2 flex-col text-[19px] capitalize `}>
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
      </Drawer>
    </>
  );
};

export default Drawers;
