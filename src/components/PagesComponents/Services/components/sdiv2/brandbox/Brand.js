import Image from 'next/image';
const Brand = ({ image }) => {
  return (
    <div className="group flex h-full w-full items-center justify-center border-[1px] border-[#807e7e]">
      <Image
        alt="group img"
        width={1920}
        height={1080}
        src={image}
        className="px-[37.5%] py-5 opacity-40 transition-all duration-300 group-hover:opacity-100"
      ></Image>
    </div>
  );
};

export default Brand;
