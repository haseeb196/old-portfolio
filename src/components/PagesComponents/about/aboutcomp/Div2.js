const Div2 = () => {
  return (
    <div className="flex  flex-row gap-60 bg-[#979696] py-12 font-mono capitalize xl:px-40 sg:px-16 s400:px-14">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[25px] font-semibold">programming skills</h1>{' '}
        </div>
        <div className="flex flex-col gap-2.5">
          <div>react</div>
          <div>javascript</div>
          <div>tailwind</div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[25px] font-semibold">language skills</h1>
        </div>
        <div className="flex flex-col gap-2.5">
          <div>english</div>
          <div>urdu</div>
          <div>arabic</div>
        </div>
      </div>
    </div>
  );
};

export default Div2;
