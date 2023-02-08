import { Clear, Menu } from '@mui/icons-material';
import { Box, IconButton, List, ListItem } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Drawers = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
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
        <Box className="flex flex-col flex-wrap items-start">
          <IconButton
            onClick={() => setOpen(false)}
            className="pl-3 pt-3"
          >
            <Clear />
          </IconButton>
          <List className="pl-[20px] sm:pr-[170px] md:pr-[210px] lg:pr-[210px]">
            <ListItem>
              <Link
                href={'/'}
                onClick={() => setOpen(false)}
                className={`sm:text-[18px] md:text-[21px] lg:text-[21px] ${
                  router.pathname == '/' ? 'text-black' : 'text-gray-400'
                }`}
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'/about'}
                onClick={() => setOpen(false)}
                className={`sm:text-[18px] md:text-[21px] lg:text-[21px] ${
                  router.pathname == '/about' ? 'text-black' : 'text-gray-400'
                }`}
              >
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'/service'}
                onClick={() => setOpen(false)}
                className={`sm:text-[18px] md:text-[21px] lg:text-[21px] ${
                  router.pathname == '/service' ? 'text-black' : 'text-gray-400'
                }`}
              >
                Service
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'/projects'}
                onClick={() => setOpen(false)}
                className={`sm:text-[18px] md:text-[21px] lg:text-[21px] ${
                  router.pathname == '/projects' ? 'text-black' : 'text-gray-400'
                }`}
              >
                Projects
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'/news'}
                onClick={() => setOpen(false)}
                className={`sm:text-[18px] md:text-[21px] lg:text-[21px] ${
                  router.pathname == '/news' ? 'text-black' : 'text-gray-400'
                }`}
              >
                News
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'/contact'}
                onClick={() => setOpen(false)}
                className={`sm:text-[18px] md:text-[21px] lg:text-[21px] ${
                  router.pathname == '/contact' ? 'text-black' : 'text-gray-400'
                }`}
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
