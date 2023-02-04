import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
const Funfacts = ({ text, numtext, num }) => {
  const ref = useRef(null);
  const hview = useInView(ref);
  return (
    <div className="flex w-full flex-col gap-2 border-[2px] border-[#b1afaf] py-[30px] text-center capitalize">
      {hview && (
        <div
          className="text-[17px] font-bold"
          ref={ref}
        >
          <CountUp
            start={0}
            end={num}
          />
          {numtext}
        </div>
      )}
      <div className="text-gray-500">{text}</div>
    </div>
  );
};

export default Funfacts;
