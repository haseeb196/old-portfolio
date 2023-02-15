import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Card from './Cards/Card';
const Sdiv1 = () => {
  const media1 = useMediaQuery('(min-width:1200px)');
  const contents = [
    {
      title: 'web design',
    },
    { title: 'content writing' },
    { title: 'brand identity' },
    { title: 'live chat' },
    { title: 'after effects' },
    { title: 'mobile App' },
  ];
  return (
    <motion.div
      initial={media1 && { x: -25, opacity: 0 }}
      animate={media1 && { x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 py-12  xl:!px-32 sg:!px-16 s400:!px-6 s760:!px-8"
    >
      <div className="flex flex-col gap-3">
        {' '}
        <h3 className="max-w-[85px] bg-[#3C3939] py-2 px-1 text-center text-[13px] font-semibold uppercase text-white rounded-[4px]">
          Services
        </h3>
        <h2 className="text-[30px] font-extrabold capitalize text-[#3C3939]">what i do</h2>
      </div>
      <div className="grid grid-cols-3 gap-x-[4.5%]  gap-y-[5%] md:grid-cols-2 s760:grid-cols-1 s760:flex-col s760:gap-16 s2000:grid-cols-4">
        {contents.map((x, i) => {
          return (
            <Card
              key={x.title}
              index={i + 1}
              title={x.title}
              text={'Web development is the most famous job in the world and it is very interesting...'}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sdiv1;
