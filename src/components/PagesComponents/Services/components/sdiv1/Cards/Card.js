import { Close, NavigateNext } from '@mui/icons-material';
import { Backdrop } from '@mui/material';
import { useState } from 'react';
import Cardhover from './Cardhover';
const Card = ({ title, index, text1, text2, text3 }) => {
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
      className="group flex w-full flex-col gap-5 rounded-sm bg-[#aaa8a8]  pl-[30px] pr-[30px] pt-[45px] pb-[40px]  text-[#280B0B] shadow-md xl:max-w-[350px]"
      onClick={changedrop}
    >
      <div className="max-w-[54px] rounded-[99999px] bg-[#bbb9b9] p-[14px] text-center  text-[17px] font-bold !text-[#252323] transition-all duration-300 group-hover:bg-[#dddcdc]">
        {index}
      </div>
      <div className="text-[20px] font-bold capitalize">
        <h1>{title}</h1>
      </div>
      <div>
        <p className="max-h-[48.5px]  overflow-hidden break-words  text-[14.6px] text-[#403535]">{text1}</p>
      </div>

      <div className="flex flex-col">
        <span className="-mb-[2.5px] text-[16px] font-semibold capitalize !text-[#280B0B] sm:mb-0">
          read more
          <NavigateNext className="-pr-3 w-[18px]" />
        </span>
        <span
          className="border-so h-[2px] w-[0px] bg-black transition-all duration-300 group-hover:w-[96px] sm:h-0 sm:w-0
        "
        ></span>
      </div>
      {drop && (
        <Backdrop open={drop}>
          <div className="flex flex-row items-start  gap-3 sg:mx-20 s760:mx-10 s760:mb-auto s760:flex-col-reverse s760:items-end">
            <div
              className="flex h-[800px] w-full max-w-[1100px]  overflow-y-scroll scroll-smooth rounded-xl bg-[#bbbaba]   shadow-2xl   xl:ml-[23%]"
              id="scrollsg"
            >
              <Cardhover
                title={title}
                t1={text1}
                t2={text2}
                t3={text3}
              />
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
