import Swipers from '@/components/Animations/Swiper/Swiper'; // Import Swiper React components
import { A11y, Autoplay, Mousewheel } from 'swiper';
import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  const content = {
    x1: {
      text: 'Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!',
      author: 'alexander walker',
      span: 'graphic designer',
      image: 'https://i.pinimg.com/736x/87/14/d5/8714d527903f7a8093091e167d9bddcc.jpg',
    },
    x2: {
      text: 'I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.',
      author: 'baraka clinton',
      span: 'english teacher',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2K27XkymJzsG1mdFcseZwBeqgyOLT2Pr_Kg&usqp=CAU',
    },
    x3: {
      text: 'These people really know what they are doing! Great customer support availability and supperb kindness.',
      author: 'mics4',
      span: 'developer',
      image: 'https://img.myloview.com/stickers/people-or-human-logo-template-in-3d-circle-shape-700-238264360.jpg',
    },
  };

  return (
    <div className="py-14 text-[#3C3939] xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8">
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
              about={content.x1.span}
              image={content.x1.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Swipers
              text={content.x2.text}
              name={content.x2.author}
              about={content.x2.span}
              image={content.x2.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Swipers
              text={content.x3.text}
              name={content.x3.author}
              about={content.x3.span}
              image={content.x3.image}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
