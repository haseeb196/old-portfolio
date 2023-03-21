import styles from '@/styles/Animation.module.css';

const Form = () => {
  return (
    <form
      className="flex flex-col gap-9"
      action="https://formsubmit.co/haseebsiddiqui1965@gmail.com"
      method="POST"
    >
      <div className="shadow-md">
        <iframe
          src={`https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          loading="lazy"
          className="!bg-white"
          title="google maps"
          style={{ height: '400px', width: '100%' }}
        />
      </div>
      <div className="flex flex-col gap-9">
        <div className="relative w-full">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            autoComplete="off"
            className="w-full border-[1px] border-[#9e9e9e] bg-transparent   px-3 py-2 text-[16px] outline-none transition-all duration-[0.2s] ease-linear placeholder:text-[#9e9e9e] focus:border-black"
          />
        </div>
        <div className="relative w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
            className="w-full border-[1px] border-[#9e9e9e] bg-transparent px-3 py-2 text-[16px] outline-none transition-all duration-[0.2s] ease-linear placeholder:text-[#9e9e9e] focus:border-black"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          required
          className="h-40 w-full resize-none border-[1px] border-[#9e9e9e] bg-transparent px-3 py-3 text-[16px] outline-0 transition-all duration-[0.2s] ease-linear placeholder:text-[#9e9e9e] focus:border-black "
        />

        <button
          aria-label="click to submit"
          className={`${styles.button}`}
        ></button>
      </div>
    </form>
  );
};

export default Form;
