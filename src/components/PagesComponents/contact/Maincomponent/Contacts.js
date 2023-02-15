import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Form from '../form/Form';
const Contacts = () => {
  const media1 = useMediaQuery('(min-width:1200px)');
  return (
    <div className="min-h-[100vh] pb-10 xl:pt-10">
      <motion.div
        initial={media1 && { x: -25, opacity: 0 }}
        animate={media1 && { x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-12 flex flex-col gap-5 xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8"
      >
        <div className="flex flex-col gap-2">
          {' '}
          <h3 className="max-w-[85px] rounded-[4px]  bg-[#3C3939] py-2 px-1 text-center text-[14px] font-semibold uppercase  text-white">
            contact
          </h3>
          <h2 className="mb-5 text-[30px] font-extrabold text-[#3C3939]">Get in Touch</h2>
        </div>
        <div>
          <Form />
        </div>
      </motion.div>
    </div>
  );
};

export default Contacts;