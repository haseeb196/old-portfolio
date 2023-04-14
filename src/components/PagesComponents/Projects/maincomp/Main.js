import { motion } from 'framer-motion';
import { useState } from 'react';
import Showcase from '../components/Showcase';
const Main = () => {
  const [bt, setBt] = useState('all');
  const content = [
    {
      type: 'clones',
      img: '/projectsImages/whatsapp.webp',
      link: 'https://whatsapp-mern-56d98.web.app',
    },
    {
      type: 'clones',
      img: '/projectsImages/linkedin.webp',
      link: 'https://linkedin-clone-e629b.web.app',
    },
    {
      type: 'clones',
      link: 'https://fb-clone-359ec.web.app',
      img: '/projectsImages/facebook.webp',
    },
    {
      type: 'clones',
      link: 'https://clone-acad5.web.app',
      img: '/projectsImages/gmail.webp',
    },
    {
      type: 'design',
      link: 'https://moboapp-693b1.web.app',
      img: '/projectsImages/Screenshot.webp',
    },
    {
      type: 'backend',
      link: 'https://wiki-app-red.vercel.app',
      img: '/projectsImages/searchengine.webp',
    },
    {
      type: 'clones',
      link: 'https://chatgpt-clon.vercel.app',
      img: '/projectsImages/chatgpt-pic.webp',
    },
    {
      type: 'clones',
      link: 'https://amazon-clone13.vercel.app',
      img: '/projectsImages/amzon-clone-img.webp',
    },
  ];
  return (
    <motion.div
      initial={{ x: -25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[100vh] pb-10 xl:pt-10"
    >
      <div className="xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8">
        <div className="flex max-w-[960px] flex-row items-end justify-between py-9  s760:flex-col  s760:items-start s760:gap-y-6 s760:py-8  s2000:max-w-[1150px]">
          <div className="flex flex-col gap-3">
            <h1 className="max-w-[85px] rounded-[4px] bg-[#3C3939] py-2 px-1  text-center text-[13px] font-semibold uppercase text-white">
              Projects
            </h1>
            <h2 className="text-[30px] font-extrabold capitalize text-[#2c2a2a]">personal projects</h2>
          </div>
          <div className="text-[15px] font-medium capitalize">
            <ul className="flex flex-row gap-4">
              <li>
                <button
                  onClick={() => {
                    setBt('all');
                  }}
                  className={`${bt === 'all' ? 'text-black' : 'text-[#474940]'} cursor-pointer`}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() => setBt('clones')}
                  className={`${bt === 'clones' ? 'text-black' : 'text-[#474940]'} cursor-pointer`}
                >
                  Clones
                </button>
              </li>
              <li>
                <button
                  onClick={() => setBt('design')}
                  className={`${bt === 'design' ? 'text-black' : 'text-[#474940]'} cursor-pointer`}
                >
                  Designs
                </button>
              </li>
              <li>
                <button
                  onClick={() => setBt('backend')}
                  className={`${bt === 'backend' ? 'text-black' : 'text-[#474940]'} cursor-pointer`}
                >
                  Backend
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid max-w-[960px] grid-cols-2 gap-9 s760:grid-cols-1 s2000:max-w-[1150px] s2000:grid-cols-3">
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
