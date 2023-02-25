import Swipers from '@/components/Animations/Swiper/Swiper'; // Import Swiper React components
import { motion } from 'framer-motion';
import { A11y, Autoplay, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import { Swiper, SwiperSlide } from 'swiper/react';
const Testimonial = () => {
  const content = {
    x1: {
      text: 'Haseeb is a dynamic and inspired developer, have truly helped me to see through the possibilities that awaits in the digital space.',
      author: 'myself',
    },
    x2: {
      text: 'What are you even doing all day long? Your eyes will get weaker',
      author: 'Mom',
    },
    x3: {
      text: "You've built this by yourself? Amazing",
      author: 'Dad',
    },
  };

  return (
    <motion.div
      initial={{ x: -25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#9e9b9b] py-12 text-[#2c2a2a]  xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8"
    >
      <div className="mb-5">
        <h1 className="font-serif text-[25px] font-[900]">Testimonial</h1>
      </div>
      <div className="flex flex-row xl:!max-w-[60vw] sg:max-w-[100vw]">
        <Swiper
          slidesPerView={2}
          modules={[Autoplay, A11y, Mousewheel]}
          mousewheel={{ invert: true }}
          spaceBetween={90}
          loop={false}
          autoplay={{ delay: 2100 }}
          breakpoints={{ 825: { slidesPerView: 2 }, 100: { slidesPerView: 1 } }}
        >
          <SwiperSlide>
            <Swipers
              text={content.x1.text}
              name={content.x1.author}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Swipers
              text={content.x2.text}
              name={content.x2.author}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Swipers
              text={content.x3.text}
              name={content.x3.author}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Testimonial;
