import { TextField } from '@mui/material';
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.prevetDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-9"
    >
      <div className="shadow-md">
        <iframe
          src={`https://maps.google.com/maps?q=53,103&z=13&output=embed`}
          style={{ height: '400px', width: '100%' }}
        />
      </div>
      <TextField
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="active:border-black"
      />
      <TextField
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="w-full resize-none"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
