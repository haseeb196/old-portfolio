import { Avatar } from '@mui/material';
const Swipers = ({ text, name, image }) => {
  return (
    <div>
      <div
        className={`squarediv relative mb-8 min-h-[150px] w-full border-[2px] border-solid border-[#413e3e] p-[40px]`}
      >
        <p className="text-center">{text}</p>
      </div>

      <div className="ml-[20px] flex flex-row gap-3">
        <div>
          <Avatar
            sx={{ width: 50, height: 50 }}
            src={image}
            alt="avatar"
          />
        </div>
        <div className={`flex flex-col items-center justify-center`}>
          <h1 className="text-[19px] font-bold capitalize">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Swipers;
