import { motion } from 'framer-motion';
import Funfacts from './components/Funfacts';
const Sdiv3 = () => {
  const boxfun = [
    { maintext: 'projects completed', num: '30', numtext: '+' },
    { maintext: 'happy clients', num: '20', numtext: 'k' },
    { maintext: 'lines of code', num: '10', numtext: 'k+' },
  ];
  return (
    <motion.div
      initial={{ x: -25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-7 pb-14 xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8"
    >
      <div className="text-[25px] font-bold capitalize text-[#2c2a2a]">
        <h1>fun fact</h1>
      </div>
      <div className="flex flex-row gap-[66px] s760:flex-col s760:gap-14">
        {boxfun.map((x, i) => {
          return (
            <Funfacts
              text={x.maintext}
              key={i}
              numtext={x.numtext}
              num={x.num}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sdiv3;
