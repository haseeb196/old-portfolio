import Timelines from '@/components/Animations/MuiComponents/Timelines';

const Div4 = () => {
  return (
    <div className="flex flex-row gap-x-[20%] bg-[#979696] py-12 xl:px-40 sg:gap-[20%] sg:px-16 s400:px-12 s760:flex-col">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[24px] font-bold capitalize">education</h1>
        </div>
        <div className="flex flex-row gap-2 s400:gap-[1px]">
          <div>
            <Timelines
              t1={'2014-2016'}
              t2={'2010-2014'}
              t3={'2008-2010'}
            />
          </div>
          <div>
            <div className="">
              <p className="whitespace-nowrap text-[19px] font-semibold sg:text-[16px] s400:whitespace-normal">
                Oxford Univercity
              </p>
              <p className="text-[15px] text-gray-600 sg:text-[13px]">
                Master Degree
              </p>
            </div>
            <div>
              <p className="text-[19px] font-semibold sg:text-[16px]">
                Texas Univercity
              </p>
              <p className="text-[15px] text-gray-600 sg:text-[13px]">
                Bachelor Degree
              </p>
            </div>
            <div>
              <p className="text-[19px] font-semibold sg:text-[16px]">
                Simone College
              </p>
              <p className="text-[15px] text-gray-600 sg:text-[13px]">
                Associate Degree
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-6">
        <div>
          <h1 className="text-[24px] font-bold capitalize">experience</h1>
        </div>
        <div className="flex flex-row gap-2 sg:gap-[1px]">
          <div>
            <Timelines
              t1={'2018-2022'}
              t2={'2016-2018'}
              t3={'2012-2016'}
            />
          </div>
          <div>
            <div>
              <p className="whitespace-nowrap  text-[19px] font-semibold sg:whitespace-normal sg:text-[16px]">
                Envato Market
              </p>
              <p className="text-[15px] text-gray-600 sg:text-[13px]">
                Exclusive Author
              </p>
            </div>
            <div>
              <p className="whitespace-nowrap text-[19px] font-semibold sg:text-[16px]">
                RGB Studio
              </p>
              <p className="text-[15px] text-gray-600 sg:text-[13px]">
                UX Designer
              </p>
            </div>
            <div>
              <p className="text-[19px]  font-semibold sg:text-[16px]">
                Innovations Park
              </p>
              <p className="text-[15px] text-gray-600  sg:text-[13px]">
                Web Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div4;
