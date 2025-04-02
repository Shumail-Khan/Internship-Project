import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="text-center">
        <p className="text-2xl pt-10 text-gray-400">
          About <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="flex gap-10 my-10 flex-wrap">
        <img
          className="h-72 w-80 rounded-lg object-cover"
          src="/src/assets/about_image.png"
          alt="About Us"
        />
        <div className="mt-10 max-w-2xl">
          <p className="mt-7">
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className="mt-4 text-gray-800">
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <h1 className="mt-3 font-bold">Our Vision</h1>
          <p className="mt-3">
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>
      <div>
        <p>WHY <span className="text-gray-900 font-bold">CHOOSE US</span></p>
        <div className="flex mt-10 gap-5">
          <div className="card efficiency bg-white border-2 border-black rounded-lg p-5 flex-1 h-64 flex flex-col justify-center items-center transition-all duration-300 hover:bg-blue-500 hover:text-white">
            <p className="font-bold text-lg text-center">Efficiency</p>
            <p className="mt-4 text-center">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className="card convenience bg-white border-2 border-black rounded-lg p-5 flex-1 h-64 flex flex-col justify-center items-center transition-all duration-300 hover:bg-green-500 hover:text-white">
            <p className="font-bold text-lg text-center">Convenience</p>
            <p className="mt-4 text-center">Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className="card personalization bg-white border-2 border-black rounded-lg p-5 flex-1 h-64 flex flex-col justify-center items-center transition-all duration-300 hover:bg-yellow-500 hover:text-white">
            <p className="font-bold text-lg text-center">Personalization</p>
            <p className="mt-4 text-center">Tailored reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;