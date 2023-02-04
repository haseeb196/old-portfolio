import Brand from './brandbox/Brand';

const Sdiv2 = () => {
  const images = [
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/1.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/2.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/3.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/4.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/5.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/6.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/7.png',
    'https://marketifythemes.net/tailwind/tokyo/assets/img/partners/light/8.png',
  ];
  return (
    <div className="my-14 flex flex-col items-start  gap-6 bg-[#979696] py-14 xl:px-40 sg:!my-20 sg:!px-16 s400:!px-6 s760:!px-10">
      <div className="text-[25px] font-bold capitalize">
        <h1>Partners</h1>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-0 s1040:!grid-cols-3 s1040:!grid-rows-3 s760:!grid-cols-2 s760:!grid-rows-5">
          {' '}
          {images.map((x, i) => {
            return (
              <Brand
                image={x}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sdiv2;
