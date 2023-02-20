import { Button, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
function Div1() {
  const media1 = useMediaQuery('(min-width:1200px)');
  return (
    <motion.div
      initial={media1 && { x: -25, opacity: 0 }}
      animate={media1 && { x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-12 xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8"
    >
      <div className="mb-14 flex flex-col gap-[0.6rem] capitalize sm:mb-8 sg:mb-10 s400:mb-6">
        <h3 className="max-w-[80px] rounded-[4px] bg-[#3C3939] py-2 px-3 text-center text-[14px] font-semibold uppercase text-white">
          about
        </h3>
        <h2 className="mb-5 text-[30px] font-extrabold text-[#3C3939]">about me</h2>

        <div className="max-w-[1000px]">
          <Image
            width={1920}
            height={1080}
            src="https://marketifythemes.net/tailwind/tokyo/assets/img/slider/1.jpg"
            alt=""
            className="h-[100%] w-[100%]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[2px] pb-8 pt-5 capitalize">
        <h2 className="text-[25px] font-semibold text-[#3C3939]">Adriano Smith</h2>
        <p className="text-[#474747]">web developer</p>
      </div>
      <hr className="border-gray-400" />
      <div className="font-roboto-condensed flex max-w-[1000px] flex-col gap-5 py-8 text-[17px] text-[#3C3939]">
        <p>
          Hi, my name is Adriano Smith and I began using WordPress when it first began. I’ve spent most of my waking
          hours for the last ten years designing, programming and operating WordPress sites.
        </p>
        <p>
          One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to
          produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web
          mechanics, I’m able to optimize complex integrations to require little-to-no maintenance while running on
          their own for years.
        </p>
      </div>
      <hr className="border-gray-400" />
      <div className="flex flex-row gap-x-[26%] py-8 s760:flex-col s760:gap-y-[20px] ">
        <div className="flex flex-row gap-[2rem] s400:gap-[10%]">
          <div className="flex flex-col gap-1 font-semibold capitalize text-[#292727]">
            <p>birthday:</p>

            <p>age:</p>

            <p>address:</p>

            <p>email:</p>

            <p>phone:</p>
          </div>
          <div className="flex flex-col flex-nowrap gap-1 text-[#3C3939]">
            <p>01.07.1990</p> <p>32</p>
            <p>Ave 11, New York</p>
            <p>tokyo@gmail.com</p>
            <p>
              <a href="tel:+770221770505">+77 022 177 05 05</a>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[2rem] s400:gap-[4%]">
          <div className="flex flex-col gap-1 font-semibold capitalize text-[#292727]">
            <p>nationality:</p>

            <p>study:</p>

            <p>Degree:</p>

            <p>Interest:</p>

            <p>Freelance:</p>
          </div>
          <div className="flex flex-col flex-nowrap gap-1 capitalize text-[#3C3939]">
            <p className="uppercase">usa</p>
            <p className="whitespace-nowrap">Univercity of Texas</p>
            <p>Master</p>
            <p className="whitespace-nowrap">Playing Football</p>
            <p>Available</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="py-9">
        <Button className="!bg-white !py-4 !px-10 font-medium normal-case !text-[#3C3939]  shadow-sm hover:bg-white">
          <a
            href=""
            download
          >
            Download CV
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

export default Div1;
