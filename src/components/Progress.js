import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const Progress = () => {
  const ref = useRef(null);
  const inview = useInView(ref);
  return (
    <div className="max-w-[500px] bg-gray-500">
      <motion.div
        ref={ref}
        initial={{ width: '0%' }}
        animate={{ width: inview ? '90%' : '0%' }}
        transition={{ duration: 1.9, type: 'spring' }}
        className="w-[95%] bg-black"
      >
        gh
      </motion.div>
    </div>
  );
};

export default Progress;
