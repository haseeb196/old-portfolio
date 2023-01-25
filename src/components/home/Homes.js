import BubbleAnimation from '@/components/BubbleAnimation/Bubble';
import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Homes = ({ color }) => {
  return (
    <div
      className={`flex flex-row items-start !justify-center gap-10 px-4 transition-all  duration-100 s1040:flex-col s1040:gap-5`}
    >
      <div className="s1040:w-100%  xl:ml-8 s1040:mx-auto">
        <BubbleAnimation cdg={color} />
      </div>
      <div className="flex flex-col gap-6 sg:gap-4">
        <h1
          className={`text-[48px] font-semibold uppercase sm:!text-[30px] lg:!text-start sg:text-center sg:text-[44px] sg:text-black ${
            color ? 'text-black' : 'text-white'
          }`}
        >
          adriano smith
        </h1>
        <p
          className={`text-[22px] sm:!text-[18px] lg:!text-start xl:max-w-[650px] sg:max-w-[600px] sg:text-center sg:text-[20px] sg:text-black  ${
            color ? 'text-black' : 'text-white'
          }`}
        >
          I am a WordPress Developer at heart and create features that are best
          suited for the job at hand.
        </p>

        <div className="flex gap-8 lg:!justify-start sg:flex-row sg:justify-center">
          <button>
            <Facebook
              htmlColor={`${color ? 'gray' : 'white'}`}
              className="text-[30px] sm:text-[24px]"
            />
          </button>
          <button>
            <Twitter
              htmlColor={`${color ? 'gray' : 'white'}`}
              className="text-[30px] sm:text-[24px]"
            />
          </button>
          <button>
            <GitHub
              htmlColor={`${color ? 'gray' : 'white'}`}
              className="text-[30px] sm:text-[24px]"
            />
          </button>
          <button>
            <LinkedIn
              htmlColor={`${color ? 'gray' : 'white'}`}
              className="text-[30px] sm:text-[24px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homes;
