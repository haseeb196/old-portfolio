import About from '@/components/PagesComponents/about/MainComponent/About';
import { useMediaQuery } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';

const Abouts = () => {
  const media1 = useMediaQuery('(min-width:1200px)');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-[#cecdcd]">
      <motion.div
        className="top-0 h-[2.3px]  origin-[0%] bg-[#ffffff] xl:fixed xl:right-0 xl:left-0  sg:sticky sg:h-[5px]"
        style={{ scaleX }}
      ></motion.div>
      <motion.div
        initial={media1 && { x: -12, opacity: 0 }}
        animate={media1 && { x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.div>
    </div>
  );
};

export default Abouts;
