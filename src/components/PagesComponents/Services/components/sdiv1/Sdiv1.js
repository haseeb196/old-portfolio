import { motion } from 'framer-motion';
import contents from 'lib/data/Service_page/Content';
import Card from './Cards/Card';
const Sdiv1 = () => {
  return (
    <motion.div
      initial={{ x: -25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-[10] flex flex-col gap-10  py-12 xl:!px-32 sg:!px-16 s400:!px-6 s760:!px-8"
    >
      <div className="flex flex-col gap-3">
        {' '}
        <h1 className="max-w-[85px] rounded-[4px] bg-[#3C3939] py-2 px-1 text-center text-[13px] font-semibold uppercase text-white">
          Services
        </h1>
        <h2 className="text-[30px] font-extrabold capitalize text-[#2c2a2a]">what i do</h2>
      </div>
      <div className="grid grid-cols-3 gap-x-[4.5%]  gap-y-[5%] md:grid-cols-2 s760:grid-cols-1 s760:flex-col s760:gap-16 s2000:grid-cols-4">
        {contents.map((x, i) => {
          return (
            <Card
              key={x.title}
              index={i + 1}
              title={x.title}
              text1={x.t1}
              text2={x.t2}
              text3={x.t3}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sdiv1;
