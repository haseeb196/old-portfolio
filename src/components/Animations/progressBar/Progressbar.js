import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
const Progressbar = ({ title, percent }) => {
  const ref = useRef(null);
  const inview = useInView(ref);

  return (
    <div className="flex min-w-[16vw] flex-col gap-3">
      <div className="flex justify-between pt-1">
        <div>
          <p className="font-bold">{title}</p>
        </div>
        <div>
          {' '}
          {inview && (
            <CountUp
              start={0}
              end={percent}
              duration={0.8}
            />
          )}
          %
        </div>
      </div>
      <div className="h-2 min-w-[100%] rounded-[1px] bg-gray-500">
        <motion.div
          ref={ref}
          initial={{ width: '0%' }}
          animate={{ width: inview ? `${percent}%` : '0%' }}
          transition={{ duration: 2, type: 'spring' }}
          className="h-2 w-[95%] bg-[#3C3939]"
        ></motion.div>
      </div>
    </div>
  );
};

export default Progressbar;
