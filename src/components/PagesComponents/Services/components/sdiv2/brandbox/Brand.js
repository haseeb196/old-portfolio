import Image from 'next/image';
const Brand = ({ image }) => {
  return (
    <div className="group  flex w-[100%] items-center justify-center border-[1px] border-[#807e7e] py-[16%] px-[27%] s400:py-[14%] s400:px-[20%]">
      <Image
        alt=""
        width={1920}
        height={1080}
        src={image}
        className="h-full w-full opacity-40 transition-all duration-300 group-hover:opacity-100"
      ></Image>
    </div>
  );
};

export default Brand;
