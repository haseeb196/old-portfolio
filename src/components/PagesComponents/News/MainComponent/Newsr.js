import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import NewsProps from '../components/NewsProps';

const Newsr = ({ newsdata }) => {
  const media1 = useMediaQuery('(min-width:1200px)');
  return (
    <div className="pb-20 xl:pt-10">
      <motion.div
        initial={media1 && { x: -25, opacity: 0 }}
        animate={media1 && { x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-12 xl:px-[160px] sg:!px-24 s400:!px-6 s760:!px-8"
      >
        <div className="flex flex-col gap-2 capitalize">
          <h3 className="max-w-[80px] bg-[#b9b9b9] py-2 px-3 text-center text-[14px] font-semibold uppercase">news</h3>
          <h2 className="mb-1 text-[30px] font-extrabold">Latest News</h2>
        </div>
        <div className="mb-16 mt-9 grid max-w-[950px] grid-cols-2 gap-x-[6%] gap-y-[70px] s760:grid-cols-1 s760:gap-16">
          {newsdata?.map((xs, i) => {
            if (xs.image !== null) {
              return (
                <NewsProps
                  image={xs?.image}
                  title={xs?.title}
                  publish={xs?.published_at}
                  desc={xs?.description}
                  key={i}
                  url={xs.url}
                  hashtag={xs.category}
                />
              );
            }
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Newsr;
