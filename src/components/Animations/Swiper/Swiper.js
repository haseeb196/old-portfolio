import { Avatar } from '@mui/material';

const Swipers = ({ text, name, about, image }) => {
  return (
    <div>
      <div
        className={`squarediv relative mb-8 w-full border-[2px] border-solid border-gray-400 p-[40px]`}
      >
        <p className="text-center">{text}</p>
      </div>

      <div className="ml-[20px] flex flex-row gap-3">
        <div>
          <Avatar
            sx={{ width: 50, height: 50 }}
            src={image}
          />
        </div>
        <div>
          <h1 className="text-[19px] font-bold capitalize">{name}</h1>
          <p className="text-gray-500">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default Swipers;
