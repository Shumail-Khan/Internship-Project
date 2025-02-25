import React from 'react'
import Header from '../components/Header'

import TopDoctor from '../components/TopDoctor'
import BookAppointment from '../components/BookAppointment'


import SpecailityManu from '../components/SpecailityManu'

const home = () => {
  return (
    <div>
        <Header/>
        <SpecailityManu/>
        <TopDoctor/>
        <BookAppointment/>
       
    </div>
  )
}

export default home