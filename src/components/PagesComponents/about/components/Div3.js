import { NavigateNext } from '@mui/icons-material';
import React from 'react';

const Div3 = () => {
  return (
    <div className="flex flex-row gap-x-[30%] py-[56px]  text-[#3C3939] xl:px-32 sg:!px-16 s400:!px-6 s760:flex-col s760:gap-y-[26px] s760:!px-8">
      <div className="flex flex-col gap-y-8 s760:gap-y-6">
        <div>
          <h1 className="text-[25px] font-bold capitalize">knowledge</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#5a5656]">Bootstrap, Angular</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#5a5656]">React, Vue, Laravel</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#5a5656]">Stylus, Sass, Less</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#5a5656]">Gulp, Webpack, Grunt</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#5a5656]">Tweenmax, GSAP</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 s760:gap-y-6">
        <div>
          <h1 className="text-[25px] font-bold capitalize">Interests</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#5a5656]">Make UI/UX Design</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#5a5656]">Create Mobile App</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#5a5656]">Site Optimization</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#5a5656]">Custom Website</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#5a5656]">Learn Ecommerce</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Div3;
