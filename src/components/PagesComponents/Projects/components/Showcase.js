import Image from 'next/image';
import { useState } from 'react';

const Showcase = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative max-h-[650px] min-h-[350px] w-full cursor-pointer transition-all duration-[3s] ease-in-out"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {open && (
        <p className={`${open && 'backdrop-blur-md'} absolute flex h-full w-full items-center justify-center`}>
          whats-app
        </p>
      )}
      <Image
        className={`h-full w-full object-cover`}
        src="https://i.tribune.com.pk/media/images/FsWUqRoOsPu1660720205-0/FsWUqRoOsPu1660720205-0.jpg"
        alt=""
        height={1920}
        width={1080}
      />
    </div>
  );
};

export default Showcase;
