import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const Showcase = ({ img, link, button, type }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (button === type) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [button, type]);

  return button === 'all' ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="group   w-full  cursor-pointer overflow-hidden"
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label="click for project to open"
      >
        <Image
          className={`aspect-auto h-full w-full transition-all duration-[0.5s] ease-in-out group-hover:scale-[1.1]`}
          src={img}
          alt="project-image"
          height={1920}
          width={1080}
          priority
        />
      </a>
    </motion.div>
  ) : show ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="group   w-full  cursor-pointer overflow-hidden"
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={`h-full w-full  transition-all duration-[0.5s] ease-in-out group-hover:scale-[1.1]`}
          src={img}
          alt=""
          height={1920}
          width={1080}
        />
      </a>
    </motion.div>
  ) : (
    <></>
  );
};

export default Showcase;
