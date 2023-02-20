import { NavigateNext } from '@mui/icons-material';

const Div3 = () => {
  return (
    <div className="flex flex-row gap-x-[30%] py-[56px]  text-[#2c2a2a] xl:px-32 sg:!px-16 s400:!px-6 s760:flex-col s760:gap-y-[26px] s760:!px-8">
      <div className="flex flex-col gap-y-8 s760:gap-y-6">
        <div>
          <h1 className="text-[25px] font-bold capitalize">knowledge</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Bootstrap, Angular</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">React, Vue, Laravel</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Stylus, Sass, Less</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Gulp, Webpack, Grunt</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Tweenmax, GSAP</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 s760:gap-y-6">
        <div>
          <h1 className="text-[25px] font-bold capitalize">Interests</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Make UI/UX Design</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Create Mobile App</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Site Optimization</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Custom Website</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Learn Ecommerce</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Div3;
