import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission (e.g., send data to an API)
      console.log('Form submitted', formData);
      // Clear form
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div className='bg-gray-900 h-full w-full'>
      <h3 className='text-center py-3 text-red-600'>Contact</h3>
      <h1 className='text-center text-white font-bold text-3xl'>Contact With Me</h1>
      <div className='flex'>
        <div className='h-[700px] w-[400px] bg-gray-950 rounded-lg mx-20 mt-10'>
          <img className='p-4 rounded-4xl' src="/images/image.png" alt="" />
          <h1 className='font-bold px-4 text-2xl text-white mt-3'>Dev Essa</h1>
          <h3 className='px-4 text-gray-400 text-xl mt-3'>MERN Stack Developer</h3>
          <p className='px-4 text-gray-400 mt-3'>Feel free to get in touch with me for any inquiries, collaborations, or project discussions. I'm always open to new opportunities and excited to connect with professionals from various fields.</p>
          <h3 className='px-4 text-gray-400 mt-3'>Phone: <span className='text-white'>+92 - 3421179168</span></h3>
          <h3 className='px-4 text-gray-400 mt-3'>Email: <span className='text-white'>maazkhan29456@gmail.com</span></h3>
          <h2 className='px-4 text-xl text-gray-400 mt-5'>Find Me In</h2>
          <div className='flex p-5 gap-4'>
            <div className='h-15 w-15 px-2 py-2 rounded-xl bg-gray-600'>
              <img src='https://img.icons8.com/color/48/000000/github--v1.png' alt="GitHub" />
            </div>
            <div className='h-15 w-15 px-2 py-2 rounded-xl bg-gray-600'>
              <img src='https://img.icons8.com/color/48/000000/linkedin.png' alt="LinkedIn" />
            </div>
          </div>
        </div>
        <div className='h-[700px] w-[700px] bg-gray-950 rounded-lg mt-10'>
          <form className='bg-gray-950 py-5 mt-3 mx-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4'>
              <div>
                <label className='text-white' htmlFor="name">YOUR NAME</label>
                <input
                  className='bg-gray-800 text-white mt-2 rounded-xl h-12 w-full placeholder-gray-400'
                  type="text"
                  placeholder='Enter your name'
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <span className='text-red-500'>{errors.name}</span>}
              </div>
              <div>
                <label className='text-white' htmlFor="phone">PHONE NUMBER</label>
                <input
                  className='bg-gray-800 text-white mt-2 rounded-xl h-12 w-full placeholder-gray-400'
                  type="text"
                  placeholder='Enter your phone number'
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <span className='text-red-500'>{errors.phone}</span>}
              </div>
              <div>
                <label className='text-white' htmlFor="email">EMAIL</label>
                <input
                  className='bg-gray-800 text-white mt-2 rounded-xl h-12 w-full placeholder-gray-400'
                  type="email"
                  placeholder='Enter your email'
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className='text-red-500'>{errors.email}</span>}
              </div>
              <div>
                <label className='text-white' htmlFor="subject">SUBJECT</label>
                <input
                  className='bg-gray-800 text-white mt-2 rounded-xl h-12 w-full placeholder-gray-400'
                  type="text"
                  placeholder='Enter the subject'
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && <span className='text-red-500'>{errors.subject}</span>}
              </div>
              <div>
                <label className='text-white' htmlFor="message">MESSAGE</label>
                <textarea
                  className='bg-gray-800 text-white mt-2 rounded-xl h-32 w-full placeholder-gray-400'
                  placeholder='Enter your message'
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && <span className='text-red-500'>{errors.message}</span>}
              </div>
              <button className='w-[670px] rounded-sm h-10 hover:border-2 border-red-600 hover:bg-black hover:text-white bg-gray-800' type='submit'>SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;