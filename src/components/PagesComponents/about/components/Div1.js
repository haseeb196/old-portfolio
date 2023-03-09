import { motion } from 'framer-motion';
import Image from 'next/image';
function Div1() {
  return (
    <motion.div
      initial={{ x: -25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-12 xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8"
    >
      <div className="mb-14 flex flex-col gap-[0.6rem] capitalize sm:mb-8 sg:mb-10 s400:mb-6">
        <h1 className="max-w-[80px] rounded-[4px] bg-[#3C3939] py-2 px-3 text-center text-[14px] font-semibold uppercase text-white">
          about
        </h1>
        <h2 className="mb-5 text-[30px] font-extrabold text-[#2c2a2a]">about me</h2>

        <div className="max-w-[1000px]">
          <Image
            width={1920}
            height={1080}
            src="/ProfilePic/Haseeb%202.png"
            alt="photo"
            className="h-[100%] w-[100%]"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col gap-[2px] pb-8 pt-5 capitalize">
        <h2 className="text-[25px] font-semibold text-[#2c2a2a]">Abdul haseeb</h2>
        <p className="text-[#393838]">web developer</p>
      </div>
      <hr className="border-gray-400" />
      <div className="flex  max-w-[1000px] flex-col gap-5 py-8 font-sans text-[17px] text-[#2c2a2a]">
        <p className="flex flex-col gap-1">
          As a frontend developer, my passion lies in crafting beautiful, intuitive user interfaces that bring digital
          experiences to life. I thrive on creating seamless interactions that leave a lasting impression on users.{' '}
        </p>
        <p>
          My expertise in HTML, CSS, and Javascript, combined with my proficiency in frameworks such as React JS, Next
          JS and Tailwind CSS, allows me to build visually stunning and highly responsive web applications. Whether
          it&apos;s creating a website from scratch or revamping an existing one, I approach each project with a
          creative mindset and an unwavering commitment to quality.
        </p>
      </div>
      <hr className="border-gray-400" />
      <div className="flex flex-row gap-x-[26%] py-8 s760:flex-col s760:gap-y-[20px] ">
        <div className="flex flex-row gap-[2rem] s400:gap-[10%]">
          <div className="flex flex-col gap-1 font-semibold capitalize text-[#2c2a2a]">
            <p>birthday:</p>

            <p>age:</p>

            <p>email:</p>
          </div>
          <div className="flex max-w-[140px] flex-col flex-nowrap gap-1 text-[#424040]">
            <p>10-9-2006</p>
            <p>{new Date().getFullYear() - '2006'}</p>

            <p className="s400:break-words">haseebsiddiqui1965@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-row gap-[2rem] s400:gap-[4%]">
          <div className="flex flex-col gap-1 font-semibold capitalize text-[#2c2a2a]">
            <p>nationality:</p>
            <p>phone:</p>
            <p>Freelance:</p>
          </div>
          <div className="flex flex-col flex-nowrap gap-1 capitalize text-[#424040]">
            <p>Pakistani</p>
            <p className="whitespace-nowrap">
              <a href="tel:+770221770505">+77 022 177 05 05</a>
            </p>
            <p>Available</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="py-9">
        <a
          href="/cv/abdul-haseeb.pdf"
          download="abdul-haseeb-cv.pdf"
          className="rounded-full bg-white !py-4 !px-10 font-medium"
        >
          Download CV
        </a>
      </div>
    </motion.div>
  );
}

export default Div1;
