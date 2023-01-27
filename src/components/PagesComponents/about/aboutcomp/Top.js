import { Button } from '@mui/material';
import Image from 'next/image';
const Top = () => {
  return (
    <div>
      <div className="mb-14 flex flex-col gap-[0.6rem] capitalize">
        <h3 className="max-w-[80px] bg-[#b9b9b9] py-2 px-3 text-center text-[14.5px] font-semibold uppercase">
          about
        </h3>
        <h2 className="text-[35px] font-extrabold">about me</h2>
      </div>
      <div className="max-w-[1000px]">
        <Image
          width={1920}
          height={1080}
          loading="lazy"
          src="https://marketifythemes.net/tailwind/tokyo/assets/img/slider/1.jpg"
          alt=""
          className="h-[100%] w-[100%]"
        />
      </div>
      <div className="flex flex-col gap-[2px] py-8 capitalize">
        <h2 className="text-[25px] font-semibold">Adriano Smith</h2>
        <p className="text-[#474747]">web developer</p>
      </div>
      <hr />
      <div className="flex max-w-[1000px] flex-col gap-5 py-8 font-serif">
        <p>
          Hi, my name is Adriano Smith and I began using WordPress when it first
          began. I’ve spent most of my waking hours for the last ten years
          designing, programming and operating WordPress sites.
        </p>
        <p>
          One of my specialties is taking an idea from scratch and creating a
          full-fledged platform. I go beyond to produce sites with a unique,
          outstanding, contemporary look-and-feel. With extensive knowledge of
          web mechanics, I’m able to optimize complex integrations to require
          little-to-no maintenance while running on their own for years.
        </p>
      </div>
      <hr />
      <div className="flex flex-row gap-72 py-8 s1139:flex-col s1139:gap-10">
        <div className="flex flex-row gap-[2.9rem]">
          <div className="flex flex-col gap-1 font-semibold capitalize">
            <p>birthday:</p>

            <p>age:</p>

            <p>address:</p>

            <p>email:</p>

            <p>phone:</p>
          </div>
          <div className="flex flex-col flex-nowrap gap-1">
            <p>01.07.1990</p> <p>32</p>
            <p>Ave 11, New York, USA</p>
            <p>tokyo@gmail.com</p>
            <p>
              <a href="tel:+770221770505">+77 022 177 05 05</a>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[2.9rem]">
          <div className="flex flex-col gap-1 font-semibold capitalize">
            <p>nationality:</p>

            <p>study:</p>

            <p>Degree:</p>

            <p>Interest:</p>

            <p>Freelance:</p>
          </div>
          <div className="flex flex-col flex-nowrap gap-1 capitalize">
            <p className="uppercase">usa</p> <p>Univercity of Texas</p>
            <p>Master</p>
            <p>Playing Football</p>
            <p>Available</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-9">
        <Button className="bg-white py-4 px-10 font-medium normal-case text-black  shadow-sm hover:bg-white">
          <a
            href=""
            download
          >
            Download CV
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Top;
