import Image from 'next/image';

/* eslint-disable react/no-unescaped-entities */
const Cardhover = ({ title }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Image
          src="https://marketifythemes.net/tailwind/tokyo/assets/img/slider/1.jpg"
          width={3840}
          height={2160}
          className="h-full w-full px-20 pt-20 s760:px-8"
          alt=""
        ></Image>
      </div>
      <div className="px-20 s760:px-8">
        <h1 className="text-[25px] font-semibold capitalize s760:text-[23px]">
          {title}
        </h1>
      </div>
      <div className="flex  flex-col gap-5 px-20 pb-20 text-[16px] font-medium text-[#424141] s760:px-8">
        <p>
          Tokyo is a leading web design agency with an award-winning design team
          that creates innovative, effective websites that capture your brand,
          improve your conversion rates, and maximize your revenue to help grow
          your business and achieve your goals.
        </p>
        <p>
          In today’s digital world, your website is the first interaction
          consumers have with your business. That's why almost 95 percent of a
          user’s first impression relates to web design. It’s also why web
          design services can have an immense impact on your company’s bottom
          line.
        </p>
        <p>
          That’s why more companies are not only reevaluating their website’s
          design but also partnering with Tokyo, the web design agency that’s
          driven more than $2.4 billion in revenue for its clients. With over 50
          web design awards under our belt, we're confident we can design a
          custom website that drives sales for your unique business.
        </p>
      </div>
    </div>
  );
};

export default Cardhover;
