import { NavigateNext } from '@mui/icons-material';

const Div3 = () => {
  return (
    <div className="flex flex-row gap-x-[30%] py-[56px] xl:px-40 sg:!px-16 s400:!px-6 s760:flex-col s760:gap-y-[26px] s760:!px-10">
      <div className="flex flex-col gap-y-8 s760:gap-y-6">
        <div>
          <h1 className="text-[25px] font-bold capitalize">knowledge</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-gray-600">Bootstrap, Angular</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-gray-600">React, Vue, Laravel</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-gray-600">Stylus, Sass, Less</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-gray-600">Gulp, Webpack, Grunt</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-gray-600">Tweenmax, GSAP</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 s760:gap-y-6">
        <div>
          <h1 className="text-[25px] font-bold capitalize">Interests</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-gray-600">Make UI/UX Design</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-gray-600">Create Mobile App</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-gray-600">Site Optimization</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-gray-600">Custom Website</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-gray-600">Learn Ecommerce</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Div3;
