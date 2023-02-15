import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Showcase from '../components/Showcase';
const Main = () => {
  const media1 = useMediaQuery('(min-width:1200px)');
  const [bt, setBt] = useState('all');
  const content = [
    {
      type: 'clones',
      img: 'https://i.pcmag.com/imagery/reviews/06ZvTNln3Toz309WtTLDiwP-25.fit_scale.size_760x427.v1652212718.jpg',
      link: 'https://whatsapp-mern-56d98.web.app',
    },
    {
      type: 'clones',
      img: 'https://www.techjuice.pk/wp-content/uploads/2021/02/linkedin-101-hero@2x.png',
      link: 'https://linkedin-clone-e629b.web.app',
    },
    {
      type: 'clones',
      link: 'https://fb-clone-359ec.web.app',
      img: 'https://pixy.org/src/9/thumbs350/93087.jpg',
    },
    {
      type: 'clones',
      link: 'https://clone-acad5.web.app',
      img: 'https://cdn.vox-cdn.com/thumbor/jJ_w_lWMMvGKoaLp_zaEXJpyZ9c=/0x0:1320x880/1400x788/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg',
    },
    {
      type: 'design',
      link: 'https://moboapp-693b1.web.app',
      img: '/screenshot.png',
    },
    {
      type: 'backend',
      link: 'https://wiki-app-cddfc.web.app',
      img: '/searchengine.png',
    },
  ];
  return (
    <motion.div
      initial={media1 && { x: -25, opacity: 0 }}
      animate={media1 && { x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[100vh] pb-10 xl:pt-10"
    >
      <div className="xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8">
        <div className="flex flex-row items-end gap-[40%] py-9  s760:flex-col s760:items-start s760:gap-y-6  s760:py-8">
          <div className="flex flex-col gap-3">
            <h3 className="max-w-[85px] rounded-[4px] bg-[#3C3939] py-2 px-1 text-center text-[13px] font-semibold uppercase text-white">
              Projects
            </h3>
            <h2 className="text-[30px] font-extrabold capitalize text-[#3C3939]">personal projects</h2>
          </div>
          <div className="text-[15px] font-medium capitalize">
            <ul className="flex flex-row gap-4">
              <li>
                <button
                  onClick={() => {
                    setBt('all');
                  }}
                  className={`${bt === 'all' ? 'text-black' : 'text-gray-500'} cursor-pointer`}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() => setBt('clones')}
                  className={`${bt === 'clones' ? 'text-black' : 'text-gray-500'} cursor-pointer`}
                >
                  Clones
                </button>
              </li>
              <li>
                <button
                  onClick={() => setBt('design')}
                  className={`${bt === 'design' ? 'text-black' : 'text-gray-500'} cursor-pointer`}
                >
                  Designs
                </button>
              </li>
              <li>
                <button
                  onClick={() => setBt('backend')}
                  className={`${bt === 'backend' ? 'text-black' : 'text-gray-500'} cursor-pointer`}
                >
                  Backend
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid max-w-[960px] grid-cols-2 gap-9 s760:grid-cols-1">
          {content.map((x, i) => {
            return (
              <Showcase
                img={x.img}
                link={x.link}
                key={i}
                button={bt}
                type={x.type}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
