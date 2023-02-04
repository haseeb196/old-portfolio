import Funfacts from './components/Funfacts';

const Sdiv3 = () => {
  const boxfun = [
    { maintext: 'projects completed', num: '777', numtext: '+' },
    { maintext: 'happy clients', num: '200', numtext: 'k' },
    { maintext: 'lines of code', num: '100', numtext: 'k+' },
  ];
  return (
    <div className="my-12 flex flex-col gap-5 xl:px-40 sg:!px-16 s400:!px-6 s760:!px-10">
      <div className="text-[25px] font-bold capitalize">
        <h1>fun fact</h1>
      </div>
      <div className="flex flex-row gap-[66px] s760:flex-col s760:gap-14">
        {boxfun.map((x, i) => {
          return (
            <Funfacts
              text={x.maintext}
              key={i}
              numtext={x.numtext}
              num={x.num}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sdiv3;
