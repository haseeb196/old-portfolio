import Progressbar from '@/components/Animations/progressBar/Progressbar';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
const Div2 = () => {
  const media1 = useMediaQuery('(min-width:1200px)');
  return (
    <div className="flex  flex-row gap-60 bg-[#979696] py-14 font-mono capitalize xl:px-40 sg:px-16 s1040:flex-col s1040:gap-10 s400:px-12">
      <motion.div
        initial={media1 && { x: -12, opacity: 0 }}
        animate={media1 && { x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <div>
          <h1 className="text-[25px] font-bold">programming skills</h1>{' '}
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <Progressbar
              title={'react'}
              percent={80}
            />
          </div>
          <div>
            <Progressbar
              title={'javascript'}
              percent={85}
            />
          </div>
          <div>
            <Progressbar
              title={'tailwind'}
              percent={90}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={media1 && { x: -12, opacity: 0 }}
        animate={media1 && { x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <div>
          <h1 className="text-[25px] font-bold">language skills</h1>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <Progressbar
              title={'english'}
              percent={70}
            />
          </div>
          <div>
            <Progressbar
              title={'urdu'}
              percent={81}
            />
          </div>
          <div>
            <Progressbar
              title={'arabic'}
              percent={50}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Div2;
