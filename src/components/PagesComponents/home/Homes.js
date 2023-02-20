import BubbleAnimation from '@/components/Animations/BubbleAnimation/Bubble';
import styles from '@/styles/Animation.module.css';
import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
const Homes = () => {
  const media1 = useMediaQuery('(min-width:1200px)');
  return (
    <div className={`flex flex-row items-start !justify-center gap-10 px-7 s1040:flex-col s1040:gap-5`}>
      <motion.div
        initial={media1 && { x: -25, opacity: 0 }}
        animate={media1 && { x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="xl:ml-8 s1040:mx-auto"
      >
        <BubbleAnimation />
      </motion.div>
      <motion.div
        initial={media1 && { x: -25, opacity: 0 }}
        animate={media1 && { x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 sg:gap-4"
      >
        <div
          className={`${styles.content} flex flex-row justify-center sm:!text-[10px] lg:justify-start xl:justify-start sg:text-[15px] s400:!text-center s400:!text-[9px]`}
        >
          <h1>adriano smith</h1>
          <h1>adriano smith</h1>
        </div>
        <p
          className={`text-[22px] text-[#3C3939] sm:!text-[18px] lg:!text-start xl:max-w-[650px] sg:max-w-[600px] sg:text-center sg:text-[20px]  
          `}
        >
          I am a WordPress Developer at heart and create features that are best suited for the job at hand.
        </p>

        <div className="flex gap-8 lg:!justify-start sg:flex-row sg:justify-center">
          <button aria-label="facebook">
            <Facebook
              htmlColor={`#666054`}
              className="!sm:text-[24px] !text-[30px]"
            />
          </button>
          <button aria-label="twitter">
            <Twitter
              htmlColor={`#666054`}
              className="!sm:text-[24px] !text-[30px]"
            />
          </button>
          <button aria-label="github">
            <GitHub
              htmlColor={`#666054`}
              className="!sm:text-[24px] !text-[30px]"
            />
          </button>
          <button aria-label="linkedin">
            <LinkedIn
              htmlColor={`#666054`}
              className="!sm:text-[24px] !text-[30px]"
            />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Homes;
