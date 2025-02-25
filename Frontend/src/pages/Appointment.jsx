import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doctorsData } from '../assets/assets';
import { AppContext } from '../context/AppContextProviders';


const Appointment = () => {
  const { docId } = useParams(); // Destructure docId from useParams
  const { doctorsData: contextDoctorsData } = useContext(AppContext); // Get doctors data from context
  const [docInfo, setDocInfo] = useState(null);
  
  const fetchDocInfo = () => {
    const doctor = contextDoctorsData.find(doc => doc._id === docId);
    setDocInfo(doctor);
    
  }
  

  useEffect(() => {
    fetchDocInfo();
  }, [contextDoctorsData, docId]); // Dependency array includes contextDoctorsData and docId

  if (!docInfo) {
    return <div>Loading...</div>; // Add loading state
  }

  return (
    <div>
     <div>
      <div>
        <p>{docInfo.name}</p>
        <img className='h-50 border-2 border-black w-50' src={docInfo.image} alt="" />
      </div>
     </div>
    </div>
  );
}

export default Appointment;