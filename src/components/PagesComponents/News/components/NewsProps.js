import { ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NewsProps = ({ image, url, title, publish, desc, hashtag }) => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    //Hydration required for next.js or error.
    setHydrated(true);
  }, []);

  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return hydrated ? (
    <div className="group w-full bg-[#d8d6d6] shadow-lg">
      <a
        href={url}
        rel="noreferrer"
        target={'_blank'}
      >
        <div className="w-full overflow-hidden">
          <Image
            alt=""
            width={1920}
            className="h-full w-full transition-all duration-[0.5s] ease-in-out  group-hover:scale-[1.09]"
            height={1920}
            src={image}
          />
        </div>
        <div className="py-1 pr-3 pl-5">
          <div className="flex flex-row justify-between py-2 font-mono  text-[14px] uppercase text-[#a4a3a4]">
            <span>{new Date(publish).toLocaleString('en-US', options)}</span>
            <span>#{hashtag}</span>
          </div>
          <div className="font-Roboto break-words text-[29px] font-bold  text-[#4e4e4e]">
            <h1 className="max-h-[5rem] overflow-hidden">{title}</h1>
          </div>
          <div className="font-opensanslight truncate  py-4">{desc}</div>
        </div>

        <div className="my-4 flex flex-row items-center justify-between py-1 pr-3 pl-5 font-medium uppercase">
          <div className="flex flex-col">
            <h1 className="-mb-[2px] sm:mb-0">read more</h1>
            <span className="h-[2px] w-0 border-solid bg-black transition-all duration-[150ms] ease-linear group-hover:w-full  sm:h-[0px] sm:w-0"></span>
          </div>

          <ArrowForwardIos className="h-[14px]" />
        </div>
      </a>
    </div>
  ) : (
    <></>
  );
};

export default NewsProps;
