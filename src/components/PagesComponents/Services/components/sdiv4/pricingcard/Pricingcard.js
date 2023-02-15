import { Button } from '@mui/material';

const Pricingcard = ({ price, type, popular, color }) => {
  return (
    <div
      className={`${
        popular && 'relative'
      } flex w-full flex-col items-start gap-5 border-[2px] border-[#b9b6b6] px-7 pt-5 pb-10 shadow-sm xl:min-w-[200px]  s400:min-w-[190px]`}
    >
      <div>
        <h1 className="text-[40px] font-bold text-[#3C3939]">
          {price}
          <sub>$</sub>
        </h1>
        <p className="text-[24.5px] font-bold capitalize text-[#3C3939]">{type}</p>
      </div>
      <div className="h-[2px] w-full bg-[#b8b6b6]"></div>
      <div className="flex flex-col gap-[6px] text-gray-600">
        {['Premium Icons', 'Quality Logo', 'Stock Images', 'Free Support'].map((x, i) => {
          return (
            <p
              className={`${
                color === 1 && i < 1
                  ? 'text-[#292626]'
                  : color === 2 && i < 2
                  ? 'text-[#292626]'
                  : color === 'all'
                  ? 'text-[#292626]'
                  : 'text-gray-600'
              }`}
              key={i}
            >
              {x}
            </p>
          );
        })}
      </div>
      <div>
        <Button className="bg-[#ececec] py-4 px-10 text-[15px] capitalize text-[#292626] hover:bg-white">purchase</Button>
      </div>
      {popular && (
        <div className="absolute -top-5 right-3 rounded-sm bg-[#dfdcdc] py-2 px-4 text-[14px] capitalize">
          <p>popuplar</p>
        </div>
      )}
    </div>
  );
};

export default Pricingcard;
