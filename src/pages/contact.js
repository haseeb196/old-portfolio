import Contacts from '@/components/PagesComponents/contact/Maincomponent/Contacts';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SnackbarProvider } from 'notistack';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="bg-[#CCC9C9]">
        <motion.div
          className="top-0 z-[100]  h-[2.5px] origin-[0%]  bg-[#ffffff]  xl:fixed xl:right-0 xl:left-0  sg:sticky sg:top-[64px] sg:h-[5px]"
          style={{ scaleX }}
        ></motion.div>

        <Contacts />
      </div>
    </SnackbarProvider>
  );
};

export default Contact;
