import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Brand from './brandbox/Brand';
const Sdiv2 = () => {
  const media1 = useMediaQuery('(min-width:1200px)');
  const images = [
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/1.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/2.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/3.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/4.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/5.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/6.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/7.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/8.png',
  ];
  return (
    <motion.div
      initial={media1 && { x: -25, opacity: 0 }}
      animate={media1 && { x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-12 flex flex-col items-start gap-8 bg-[#979696] pt-10 pb-[82px] xl:px-32 sg:!my-20 sg:!px-16 s400:!px-6 s760:!px-8"
    >
      <div className="text-[25px] font-bold capitalize">
        <h1>Partners</h1>
      </div>
      <div>
        <div className="grid grid-cols-4   gap-0  s1040:!grid-cols-3 s1040:!grid-rows-3 s760:w-full s760:!grid-cols-2 s760:!grid-rows-4">
          {' '}
          {images.map((x, i) => {
            return (
              <Brand
                image={x}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Sdiv2;
