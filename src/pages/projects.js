import Main from '@/components/PagesComponents/Projects/Maincomp/Main';
import { motion, useScroll, useSpring } from 'framer-motion';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="bg-[#cecdcd]">
      <motion.div
        className="top-0 z-[100]  h-[2.5px] origin-[0%]  bg-[#ffffff]  xl:fixed xl:right-0 xl:left-0  sg:sticky sg:top-[64px] sg:h-[5px]"
        style={{ scaleX }}
      ></motion.div>
      <Main />
    </div>
  );
};

export default Projects;
