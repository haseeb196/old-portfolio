import Newsr from '@/components/PagesComponents/News/MainComponent/Newsr';
import { motion, useScroll, useSpring } from 'framer-motion';

const News = ({ news }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="bg-[#cecdcd]">
      <motion.div
        className="z-[100]  h-[2.5px] origin-[0%]  bg-[#ffffff]  xl:!fixed xl:!right-0 xl:!left-0  xl:!top-0 sg:sticky sg:top-[64px] sg:h-[5px]"
        style={{ scaleX }}
      ></motion.div>
      {news?.data
        .filter((x) => x.image != null)
        .map((x, i) => {
          return (
            <Newsr
              newsdata={x}
              key={i}
            />
          );
          //next build newsr.js go their after deleting this
        })}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.access_key}fed&keywords=tech&countries=us,gb&sources=cnn&language=en&limit=10`,
  );
  const news = await res.json();

  return { props: { news } };
}

export default News;
