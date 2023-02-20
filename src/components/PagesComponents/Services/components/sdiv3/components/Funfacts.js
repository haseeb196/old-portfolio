import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
const Funfacts = ({ text, numtext, num }) => {
  const ref = useRef(null);
  const hview = useInView(ref);
  return (
    <div className="flex w-full flex-col gap-2 border-[2px] border-[#b1afaf] py-[30px] text-center capitalize">
      {hview && (
        <div className="text-[17px] font-bold text-[#3C3939]">
          <CountUp
            start={0}
            end={num}
            duration={0.8}
          />
          {numtext}
        </div>
      )}
      <div
        className="text-[#555353]"
        ref={ref}
      >
        {text}
      </div>
    </div>
  );
};

export default Funfacts;
