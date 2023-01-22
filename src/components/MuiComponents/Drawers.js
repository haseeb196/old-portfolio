import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton, Box, List, ListItem } from '@mui/material';
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
        <Menu style={{ color: 'white' }} />
      </IconButton>
      <Drawer
        sx={{ width: 500 }}
        SlideProps={{ timeout: 300 }}
        open={open}
        onClose={() => setOpen(false)}
        anchor={'right'}
      >
        <Box className="flex flex-wrap flex-col items-start">
          <IconButton onClick={() => setOpen(false)}>
            <Clear />
          </IconButton>
          <List className="md:pr-[210px] lg:pr-[210px] pl-[20px] sm:pr-[170px]">
            <ListItem>
              <Link
                href={'/'}
                onClick={() => setOpen(false)}
                className="md:text-[21px] lg:text-[21px] sm:text-[18px]"
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'/about'}
                onClick={() => setOpen(false)}
                className="md:text-[21px] lg:text-[21px] sm:text-[18px]"
              >
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'/service'}
                onClick={() => setOpen(false)}
                className="md:text-[21px] lg:text-[21px] sm:text-[18px]"
              >
                Service
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'/projects'}
                onClick={() => setOpen(false)}
                className="md:text-[21px] lg:text-[21px] sm:text-[18px]"
              >
                Projects
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'/news'}
                onClick={() => setOpen(false)}
                className="md:text-[21px] lg:text-[21px] sm:text-[18px]"
              >
                News
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'/contact'}
                onClick={() => setOpen(false)}
                className="md:text-[21px] lg:text-[21px] sm:text-[18px]"
              >
                Contact
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Drawers;
