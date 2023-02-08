import { Error } from '@mui/icons-material';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
const Form = () => {
  const [error, setError] = useState(false);
  const [emailerror, setEmailerror] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const regexe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const formhandler = () => {
    setEmailerror(false);
    setError(false);
  };

  const handleChange = (e) => {
    setError(false);
    setEmailerror(false);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name == '' || formData.email == '' || formData.message == '') {
      setError(true);
    } else if (!regexe.test(formData?.email)) {
      setEmailerror(true);
    } else {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      //set the responsive heights for this page firsts
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-9"
      onClick={formhandler}
    >
      <div className="shadow-md">
        <iframe
          src={`https://maps.google.com/maps?q=53,103&z=13&output=embed`}
          loading="lazy"
          style={{ height: '400px', width: '100%' }}
        />
      </div>
      <div className="flex flex-col gap-9">
        <div className="relative w-full">
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: error ? 1 : 0 }}
              transition={{ duration: 0.9 }}
              className="absolute z-0 text-[15px] text-red-500"
            >
              Please Fill Required Fields
            </motion.div>
          )}
          <motion.input
            animate={{ marginTop: error ? 30 : 0 }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            autoComplete="off"
            className="w-full border-[1px] border-[#9e9e9e] bg-transparent   px-3 py-2 text-[16px] outline-none transition-all duration-[0.2s] ease-linear placeholder:text-[#9e9e9e] focus:border-black"
          />
        </div>
        <motion.div
          animate={{ marginBottom: emailerror ? 20 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full"
        >
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="off"
            className="w-full border-[1px] border-[#9e9e9e] bg-transparent px-3 py-2 text-[16px] outline-none transition-all duration-[0.2s] ease-linear placeholder:text-[#9e9e9e] focus:border-black"
          />
          {emailerror && (
            <motion.div
              initial={{ opacity: 0, top: 20 }}
              animate={{ top: 41, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute my-1 flex max-w-[180px] flex-row items-center gap-2 capitalize text-red-500"
            >
              <Error />
              <span>Enter a valid email</span>
            </motion.div>
          )}
        </motion.div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="h-40 w-full resize-none border-[1px] border-[#9e9e9e] bg-transparent px-3 py-3 text-[16px] outline-0 transition-all duration-[0.2s] ease-linear placeholder:text-[#9e9e9e] focus:border-black "
        />

        <Button
          type="submit"
          className="max-w-[200px] bg-white   py-4 px-[54px] text-center text-[16px] capitalize text-[black] hover:bg-white"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
