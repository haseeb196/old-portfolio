import About from '@/components/PagesComponents/about/MainComponent/About';
import { motion, useScroll, useSpring } from 'framer-motion';

const Abouts = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-[#cecdcd]">
      <motion.div
        className="z-[100]  h-[2.5px] origin-[0%]  bg-[#ffffff]  xl:!fixed xl:!right-0 xl:!left-0  xl:!top-0 sg:sticky sg:top-[64px] sg:h-[5px]"
        style={{ scaleX }}
      ></motion.div>

      <About />
    </div>
  );
};

export default Abouts;
