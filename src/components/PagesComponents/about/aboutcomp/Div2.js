import Progressbar from '@/components/Animations/progressBar/Progressbar';

const Div2 = () => {
  return (
    <div className="flex  flex-row gap-60 bg-[#979696] py-14 font-mono capitalize xl:px-40 sg:px-16 s1040:flex-col s1040:gap-10 s400:px-12">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[25px] font-bold">programming skills</h1>{' '}
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <Progressbar
              title={'react'}
              percent={80}
            />
          </div>
          <div>
            <Progressbar
              title={'javascript'}
              percent={85}
            />
          </div>
          <div>
            <Progressbar
              title={'tailwind'}
              percent={90}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[25px] font-bold">language skills</h1>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <Progressbar
              title={'english'}
              percent={70}
            />
          </div>
          <div>
            <Progressbar
              title={'urdu'}
              percent={81}
            />
          </div>
          <div>
            <Progressbar
              title={'arabic'}
              percent={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div2;
