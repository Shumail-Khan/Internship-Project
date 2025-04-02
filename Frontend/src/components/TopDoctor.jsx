import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContextProviders';
import { doctorsData } from '../assets/assets';


const TopDoctor = () => {
  const navigate = useNavigate();
  const {doctorsData} = useContext(AppContext)

  

  return (
    <div>
      <h1 className='text-center font-bold text-2xl'>Top Doctors to Book</h1>
      <p className='text-center font-medium mt-2'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='flex flex-wrap gap-4'>
        {doctorsData.slice(0,10).map((item, index) => (
          <div
            key={index}  
            onClick={() => {navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
            className='border bg-blue-50 border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 mt-7 h-70 w-50'
          >
            <img className='rounded-3xl bg-blue-50' src={item.image} alt={item.name} />
            <div className='bg-white'>
              <li className='text-green-600 mx-2'>Available</li>
              <h1 className='text-gray-900 text-lg px-2 font-medium'>{item.name}</h1>
              <p className='text-gray-600 text-sm px-2'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
      className='bg-blue-100 text-gray-600 px-12 py-3 rounded-full mt-10 mx-auto block'
      onClick={()=>{navigate('/docter');scrollTo(0,0)}}
      >
        More
      </button>
    </div>
  );
};

export default TopDoctor;