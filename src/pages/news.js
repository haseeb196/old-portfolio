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

      <Newsr newsdata={news?.data} />
    </div>
  );
};

export async function getServerSideProps() {
  const today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  // Fetch data from external API
  const res = await fetch(
    `http://api.mediastack.com/v1/news?sources=cnn&language=en&limit=25&date=${yyyy}-${mm}-${dd}&access_key=${process.env.access_key}fed`,
  );
  const news = await res.json();

  return { props: { news } };
}

export default News;
