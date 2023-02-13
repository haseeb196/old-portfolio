import Showcase from '../components/Showcase';

const Main = () => {
  return (
    <div className="pb-10 xl:pt-10">
      <div className="xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8">
        <div className="flex flex-row items-end gap-[40%] py-9  s760:flex-col s760:items-start s760:gap-y-6  s760:py-8">
          <div className="flex flex-col gap-3">
            <h3 className="max-w-[85px] bg-[#b9b9b9] py-2 px-1 text-center text-[13px] font-semibold uppercase">
              Projects
            </h3>
            <h2 className="text-[30px] font-extrabold capitalize">personal projects</h2>
          </div>
          <div className="text-[15px] font-medium capitalize text-[#6b6868]">
            <ul className="flex flex-row gap-4">
              <li>All</li>
              <li>Clones</li>
              <li>Designs</li>
              <li>Backend</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-9 s760:grid-cols-1">
          <Showcase />
          <Showcase />
          <Showcase />
        </div>
      </div>
    </div>
  );
};

export default Main;
