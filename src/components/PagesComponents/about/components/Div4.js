import Timelines from '@/components/Animations/MuiComponents/Timelines';

const Div4 = () => {
  return (
    <div className="flex flex-row gap-x-[20%] bg-[#979696] py-12 xl:px-40 sg:gap-[20%] sg:px-16 s400:px-12 s760:flex-col">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[24px] font-bold capitalize">education</h1>
        </div>

        <div>
          <Timelines
            D1={'2014-2016'}
            D2={'2010-2014'}
            D3={'2008-2010'}
            t1={{ title: 'Oxford Univercity', span: 'Master Degree' }}
            t2={{ title: 'Texas Univercity', span: 'Bachelor Degree' }}
            t3={{ title: 'Simone College', span: 'Associate Degree' }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start gap-6">
        <div>
          <h1 className="text-[24px] font-bold capitalize">experience</h1>
        </div>

        <div>
          <Timelines
            D1={'2018-2022'}
            D2={'2016-2018'}
            D3={'2012-2016'}
            t1={{ title: 'Envato Market', span: 'Exclusive Author' }}
            t2={{ title: 'RGB Studio', span: 'UX Designer' }}
            t3={{ title: 'Innovations Park', span: 'Web Designer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Div4;