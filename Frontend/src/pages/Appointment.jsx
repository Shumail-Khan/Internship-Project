import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../context/AppContextProviders';
import RelatedDocter from '../components/RelatedDocter';

const Appointment = () => {
  const { docId } = useParams();
  const { doctorsData: contextDoctorsData } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

  const generateTimeSlots = () => {
    let slots = [];
    let startTime = 9 * 60;
    let endTime = 17 * 60;
    while (startTime < endTime) {
      let hours = Math.floor(startTime / 60);
      let minutes = startTime % 60;
      let period = hours >= 12 ? 'PM' : 'AM';
      let formattedTime = `${hours % 12 === 0 ? 12 : hours % 12}:${minutes === 0 ? '00' : minutes} ${period}`;
      slots.push(formattedTime);
      startTime += 30;
    }
    return slots;
  };

  useEffect(() => {
    const doctor = contextDoctorsData.find(doc => doc._id === docId);
    setDocInfo(doctor);
  }, [contextDoctorsData, docId]);

  if (!docInfo) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  const handleSlotClick = (day, time) => {
    setSelectedSlot({ day, time });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='mt-6 flex justify-center'>
          <img className='h-70 border-2 border-black w-60 rounded-2xl bg-blue-600' src={docInfo.image} alt={docInfo.name} />
        </div>
        <div className='border-2 px-5 mt-6 py-5 rounded-xl border-black w-full md:w-[900px]'>
          <div className='flex gap-1 items-center'>
            <p className='font-bold text-2xl'>{docInfo.name}</p>
            <img src="/src/assets/verified_icon.svg" alt="Verified" className="w-6" />
          </div>
          <p className='text-sm mt-2'>MBBS - {docInfo.speciality}</p>
          <p className='mt-2 h-7 w-20 px-2 rounded-2xl border-2 border-gray-300 text-center'>{docInfo.experience}</p>
          <p className='font-bold mt-4'>About</p>
          <p className='mt-2'>{docInfo.about}</p>
          <p className='mt-4 font-bold'>Appointment Fees: ${docInfo.fees}</p>
        </div>
      </div>

      <div className='mt-6'>
        <h2 className='text-xl font-bold text-center'>Available Appointment Slots</h2>
        <div className='flex gap-4 overflow-x-auto py-4 scrollbar-hide'>
          {days.map((day, index) => (
            <div key={index} className='border p-4 rounded-lg w-40 min-w-[160px] shadow-lg bg-gray-100 transition-transform transform hover:scale-105 duration-300 ease-in-out'>
              <h3 className='font-bold text-center'>{day}</h3>
              <div className='h-40 overflow-y-auto mt-2 scrollbar-hide'>
                {generateTimeSlots().map((slot, i) => (
                  <p 
                    key={i} 
                    className={`text-sm text-center py-1 rounded-lg shadow-md mb-1 cursor-pointer transition-all duration-300 ease-in-out ${
                      selectedSlot?.day === day && selectedSlot?.time === slot ? 'bg-blue-500 text-white scale-105' : 'bg-white hover:bg-blue-300 hover:scale-105'
                    }`}
                    onClick={() => handleSlotClick(day, slot)}
                  >
                    {slot}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedSlot && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-md text-center">
            <p className="font-bold">Selected Slot:</p>
            <p className="mt-1 text-lg">{selectedSlot.day}, {selectedSlot.time}</p>
            <button className="mt-2 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all duration-300">
              Confirm Appointment
            </button>
          </div>
        )}
      </div>
      <RelatedDocter docId={docId} speciality= {docInfo.speciality}/>
    </div>
  );
};

export default Appointment;
