import Contacts from '@/components/PagesComponents/contact/Maincomponent/Contacts';
import { motion, useScroll, useSpring } from 'framer-motion';
import Head from 'next/head';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Contact Section"
        />
        <title>Contacts</title>
      </Head>
      <div className="bg-[#CCC9C9]">
        <motion.div
          className="top-0 z-[100]  h-[2.5px] origin-[0%]  bg-[#ffffff]  xl:fixed xl:right-0 xl:left-0  sg:sticky sg:top-[64px] sg:h-[5px]"
          style={{ scaleX }}
        ></motion.div>

        <Contacts />
      </div>
    </>
  );
};

export default Contact;
