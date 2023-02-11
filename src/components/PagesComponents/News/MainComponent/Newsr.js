import NewsProps from '../components/NewsProps';

const Newsr = () => {
  return (
    <div className="pb-10 xl:pt-10">
      <div className="mb-16 mt-12 xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8">
        <div className="flex flex-col gap-2 capitalize">
          <h3 className="max-w-[80px] bg-[#b9b9b9] py-2 px-3 text-center text-[14px] font-semibold uppercase">news</h3>
          <h2 className="mb-5 text-[30px] font-extrabold">Latest News</h2>
        </div>
        <div className="flex max-w-[1000px] flex-row gap-x-[6%]">
          <NewsProps />
          <NewsProps />
        </div>
      </div>
    </div>
  );
};

export default Newsr;
