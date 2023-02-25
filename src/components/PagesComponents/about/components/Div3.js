import { NavigateNext } from '@mui/icons-material';
import { motion } from 'framer-motion';
const Div3 = () => {
  return (
    <div
      initial={{ x: -25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row gap-x-[30%] py-[56px]  text-[#2c2a2a] xl:px-32 sg:!px-16 s400:!px-6 s760:flex-col s760:gap-y-[26px] s760:!px-8"
    >
      <motion.div className="flex flex-col gap-y-8 s760:gap-y-6">
        <div>
          <h1 className="text-[25px] font-bold capitalize">knowledge</h1>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Node js</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">React js, Next js</span>
          </p>

          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Tailwind css, Sass</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Material Ui, Ionic</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Git, Github</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Firebase, Mongodb</span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext /> <span className="text-[#444141]">Rest Api&apos;s</span>
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col gap-y-8 s760:gap-y-6">
        <div>
          <h1 className="text-[25px] font-bold capitalize">certifications</h1>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-[#444141] hover:text-black">
              <a
                href="https://www.freecodecamp.org/certification/fcc9ddae037-9284-4210-a51d-54bbc9d0ad5a/legacy-front-end"
                target={'_blank'}
                rel="noreferrer"
              >
                Legacy Front End
              </a>
            </span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-[#444141] hover:text-black">
              <a
                href="https://www.freecodecamp.org/certification/fcc9ddae037-9284-4210-a51d-54bbc9d0ad5a/front-end-development-libraries"
                target={'_blank'}
                rel="noreferrer"
              >
                Front End Development Libraries
              </a>
            </span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-[#444141] hover:text-black">
              <a
                href="https://www.freecodecamp.org/certification/fcc9ddae037-9284-4210-a51d-54bbc9d0ad5a/responsive-web-design"
                target={'_blank'}
                rel="noreferrer"
              >
                Responsive Web Design
              </a>
            </span>
          </p>
          <p className="flex gap-x-2">
            <NavigateNext />{' '}
            <span className="text-[#444141] hover:text-black">
              <a
                href="https://www.freecodecamp.org/certification/fcc9ddae037-9284-4210-a51d-54bbc9d0ad5a/back-end-development-and-apis"
                target={'_blank'}
                rel="noreferrer"
              >
                Back End Development and APIs
              </a>
            </span>
          </p>

          <p className="flex gap-x-2">
            <NavigateNext />
            <span className="text-[#444141] hover:text-black">
              <a
                href="https://www.freecodecamp.org/certification/fcc9ddae037-9284-4210-a51d-54bbc9d0ad5a/data-visualization"
                target={'_blank'}
                rel="noreferrer"
              >
                Data Visualization
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Div3;
