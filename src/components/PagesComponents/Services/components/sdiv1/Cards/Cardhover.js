/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const Cardhover = ({ title, t1, t2, t3 }) => {
  return (
    <div className="flex flex-col gap-6 text-[#2c2a2a]">
      <div>
        <Image
          src={`/ServiceImages/${title}.png`}
          width={3840}
          height={2160}
          className="h-full min-h-[500px] w-full px-20 pt-20 s760:px-8"
          alt=""
        ></Image>
      </div>
      <div className="px-20 s760:px-8">
        <h1 className="text-[25px] font-semibold capitalize s760:text-[23px]">{title}</h1>
      </div>
      <div className="flex  flex-col gap-5 px-20 pb-20 text-[16px] font-medium text-[#3d3b3b] s760:px-8">
        <p>{t1}</p>
        <p>{t2}</p>
        <p>{t3}</p>
      </div>
    </div>
  );
};

export default Cardhover;
