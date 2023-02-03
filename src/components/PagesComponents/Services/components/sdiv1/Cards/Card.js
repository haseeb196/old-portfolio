import { Close } from '@mui/icons-material';
import { Backdrop } from '@mui/material';
import { useState } from 'react';
import Cardhover from './Cardhover';

const Card = ({ title, index, text }) => {
  const [drop, setDrop] = useState(false);

  const changedrop = () => {
    if (drop) {
      setDrop(false);
    } else if (!drop) {
      setDrop(true);
    }
  };

  return (
    <div
      className="group flex w-full flex-col gap-5 rounded-sm bg-[#a09f9f] pl-[30px] pr-[30px] pt-[45px] pb-[40px]  shadow-md xl:max-w-[350px]"
      onClick={changedrop}
    >
      <div className="max-w-[54px] rounded-[99999px] bg-[#bbb9b9] p-[14px] text-center  text-[17px] font-bold text-black transition-all duration-300 group-hover:bg-[#dddcdc]">
        {index}
      </div>
      <div className="text-[20px] font-bold capitalize">
        <h1>{title}</h1>
      </div>
      <div>
        <p className="break-words  text-[14.5px] text-[#413f3f]">{text}</p>
      </div>

      <div>
        <span className="font-bold capitalize">read more</span>
      </div>

      {drop && (
        <Backdrop open={drop}>
          <div className="ml-[20%] flex flex-row items-start gap-3 sg:mx-20 s760:mx-10 s760:flex-col-reverse s760:items-end">
            <div className="h-[80vh] w-full max-w-[1050px] overflow-y-scroll scroll-smooth rounded-xl   bg-[#cecdcd]  shadow-2xl scrollbar scrollbar-track-transparent scrollbar-thumb-[#686767] scrollbar-thumb-rounded-[4px] scrollbar-corner-rounded-full scrollbar-w-[8px]">
              <Cardhover />
            </div>
            <div
              className="rounded-xl border-[2px] border-solid border-white p-2 hover:rounded-[999px] s760:mt-4"
              onClick={changedrop}
            >
              <Close />
            </div>
          </div>
        </Backdrop>
      )}
    </div>
  );
};

export default Card;
