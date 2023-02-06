import Form from './form/Form';

const Contacts = () => {
  return (
    <div className="xl:pt-10">
      <div className="my-12 flex flex-col gap-10 xl:px-40 sg:!px-16 s400:!px-6 s760:!px-10">
        <div className="flex flex-col gap-2">
          {' '}
          <h3 className="max-w-[85px] bg-[#b9b9b9] py-2 px-1 text-center text-[14px] font-semibold uppercase">
            contact
          </h3>
          <h2 className="mb-5 text-[30px] font-extrabold">Get in Touch</h2>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
