import Card from './Cards/Card';

const Sdiv1 = () => {
  const contents = [
    {
      title: 'web design',
    },
    { title: 'content writing' },
    { title: 'brand identity' },
    { title: 'live chat' },
    { title: 'after effects' },
    { title: 'mobile App' },
  ];
  return (
    <div className="my-12 flex flex-col gap-10  xl:px-40 sg:px-16 s400:px-12">
      <div className="flex flex-col gap-3">
        {' '}
        <h3 className="max-w-[85px] bg-[#b9b9b9] py-2 px-1 text-center text-[13px] font-semibold uppercase">
          Services
        </h3>
        <h2 className="text-[30px] font-extrabold capitalize">what i do</h2>
      </div>
      <div className="grid grid-cols-3 gap-x-[4.5%]  gap-y-[5%] md:grid-cols-2 s760:grid-cols-1 s760:flex-col s760:gap-16 s2000:grid-cols-4">
        {contents.map((x, i) => {
          return (
            <Card
              key={x.title}
              index={i + 1}
              title={x.title}
              text={
                'Web development is the most famous job in the world and it is very interesting...'
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sdiv1;
