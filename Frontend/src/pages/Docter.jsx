import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContextProviders';

const Docter = () => {
  const { speciality } = useParams();
  console.log(speciality)
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctorsData } = useContext(AppContext); 
 
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctorsData.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctorsData);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctorsData, speciality]); // Only rerun when doctors or speciality change

  return (
    <div className=''>
      <p>Browse through the doctors specialist.</p>
      <div className=' mt-4 flex gap-4'>
        <div className='flex flex-col gap-4 mt-7'>
          <p onClick={()=> speciality === 'General physician' ? navigate('/docter') : navigate('/docter/General physician')} className={`h-10 pl-3 pr-16 py-2 w-55  bg-gray-300 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/docter') : navigate('/docter/Gynecologist')} className={`h-10 pl-3 pr-16 py-2 w-55  bg-gray-300 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/docter') : navigate('/docter/Dermatologist')} className={`h-10 pl-3 pr-16 py-2 w-55  bg-gray-300 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/docter') : navigate('/docter/Pediatricians')} className={`h-10 pl-3 pr-16 py-2 w-55  bg-gray-300 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/docter') : navigate('/docter/Neurologist')} className={`h-10 pl-3 pr-16 py-2 w-55  bg-gray-300 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black":""}  `}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/docter') : navigate('/docter/Gastroenterologist')} className={`h-10 pl-3 pr-16 py-2 w-55  bg-gray-300 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black": ""}`}>Gastroenterologist</p>
        </div>
        <div className='flex flex-wrap gap-4'>
          {
            filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className='border bg-blue-50 border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 mt-7 h-70 w-50'
              >
                <img className='rounded-3xl' src={item.image} alt={item.name} />
                <div className='bg-white'>
                  <li className='text-green-600 mx-2'>Available</li>
                  <h1 className='text-gray-900 text-lg px-2 font-medium'>{item.name}</h1>
                  <p className='text-gray-600 text-sm px-2'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Docter;

