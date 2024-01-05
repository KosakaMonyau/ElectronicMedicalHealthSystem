import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { FaTimes } from 'react-icons/fa'

const ViewAppointments = () => {
  return (
    <div className='container'> 
      <div className='reminder-block'>
        <h3>Patient Name <FaTimes style={{color: 'red', cursor: 'pointer'}}/> </h3>
        <h6>July 24th at 09:00 am</h6>
        <h7 style={{color: 'black'}}>For tooth checkup</h7>
      </div>
      <div className='links'>
        <Link to='/menu'> <IoIosArrowBack/>Go back</Link>
      </div>
    </div>
  )
}

export default ViewAppointments
