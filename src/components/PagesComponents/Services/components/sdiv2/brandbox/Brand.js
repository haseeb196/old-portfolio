import Image from 'next/image';

// fix below 760px image not displaying tommorrow..

const Brand = ({ image }) => {
  return (
    <div className="group flex items-center justify-center border-[1px] border-[#807e7e] py-[15%] px-[23%]">
      <Image
        alt=""
        width={1920}
        height={1080}
        src={image}
        className="w-[100%] opacity-40 transition-all duration-300 group-hover:opacity-100"
      ></Image>
    </div>
  );
};

export default Brand;