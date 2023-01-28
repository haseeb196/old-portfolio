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
        className="fixed top-0 right-0 left-0 h-[2.3px]  origin-[0%] bg-[#ffffff]"
        style={{ scaleX }}
      ></motion.div>
      <About />
    </div>
  );
};

export default Abouts;
