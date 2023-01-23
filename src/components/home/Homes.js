import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Avatar } from '@mui/material';

const Homes = ({ color }) => {
  return (
    <div
      className={`flex flex-row items-start !justify-center gap-10 px-4 transition-all  duration-100 s1040:flex-col s1040:gap-5`}
    >
      <div className="s1040:w-100%  s1040:mx-auto">
        <Avatar
          src={
            'data:image/jpeg;base64,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'
          }
          className="h-[150px] w-[150px] sm:h-[135px] sm:w-[135px]"
        />
      </div>
      <div className="flex flex-col gap-6 sg:gap-4">
        <h1
          className={`text-[48px] font-semibold uppercase sm:!text-[30px] sg:text-center sg:text-[44px] ${
            color ? 'text-black' : 'text-white'
          }`}
        >
          adriano smith
        </h1>
        <p
          className={`text-[22px] sm:!text-[18px] xl:max-w-[700px] sg:max-w-[600px] sg:text-center sg:text-[20px]  ${
            color ? 'text-black' : 'text-white'
          }`}
        >
          I am a WordPress Developer at heart and create features that are best
          suited for the job at hand.
        </p>

        <div className="flex gap-8 sg:flex-row sg:justify-center">
          <button>
            <Facebook
              htmlColor="gray"
              className="text-[30px] sm:text-[24px]"
            />
          </button>
          <button>
            <Twitter
              htmlColor="gray"
              className="text-[30px] sm:text-[24px]"
            />
          </button>
          <button>
            <GitHub
              htmlColor="gray"
              className="text-[30px] sm:text-[24px]"
            />
          </button>
          <button>
            <LinkedIn
              htmlColor="gray"
              className="text-[30px] sm:text-[24px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homes;
