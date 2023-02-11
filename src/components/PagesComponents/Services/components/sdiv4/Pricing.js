import Pricingcard from './pricingcard/Pricingcard';

const Pricing = () => {
  const prices = [
    {
      price: '0',
      type: 'free',
      popular: false,
      color: 1,
    },
    {
      price: '30',
      type: 'basic',
      popular: true,
      color: 2,
    },
    {
      price: '70',
      type: 'premium',
      popular: false,
      color: 'all',
    },
  ];
  return (
    <div className="flex flex-col gap-6 bg-[#979696] py-16 pt-14 xl:px-32 sg:!mt-20 sg:!px-16 s400:!px-6 s760:!px-8">
      <div className="text-[25px] font-bold capitalize">
        <h1>pricing</h1>
      </div>
      <div className="flex flex-row gap-[5.5%] s760:flex-col s760:gap-y-[50px]">
        {prices.map((x, i) => {
          return (
            <Pricingcard
              key={i}
              price={x.price}
              type={x.type}
              popular={x.popular}
              color={x.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
