import { ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';
//style Read More animation from clone
const NewsProps = () => {
  return (
    <div className="group w-full bg-[white] shadow-lg">
      <div className="w-full overflow-hidden">
        <Image
          alt=""
          width={1920}
          className="h-full w-full transition-all duration-[0.5s] ease-in-out  group-hover:scale-[1.09]"
          height={1080}
          src={'https://wallpaperaccess.com/full/31189.jpg'}
        />
      </div>
      <div className="py-1 pr-3 pl-5">
        <div className="flex flex-row justify-between py-2 font-mono  text-[14px] uppercase text-[#a4a3a4]">
          <p>posted 22.december 2014</p>
          <p>#design</p>
        </div>
        <div className="font-Roboto break-words text-[29px] font-bold  text-[#4e4e4e]">
          <h1>How to create beautiful typografdggph</h1>
        </div>
        <div className="font-opensanslight py-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem quos aspernatur fugiat illum
          </p>
        </div>
      </div>
      <div className="my-4 flex flex-row items-center justify-between py-1 pr-3 pl-5 font-medium uppercase">
        <div className="flex flex-row items-center">
          <h1 className="">read more</h1>
          <span className="h-[2px] w-3 border-solid bg-black"></span>
        </div>

        <ArrowForwardIos className="h-[14px]" />
      </div>
    </div>
  );
};

export default NewsProps;
