import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const SetAppointment = () => {
  return (
    <div className='container'>
      <h1>Your Appointments</h1>
      <div className='reminder-block'>
        <h3>None</h3>
        {/* <h6></h6> */}
        <h7 style={{color: 'black'}}></h7>
      </div>
      <div className='form-control'>
        <h1>Request Appointment</h1>
        <div className='form-control'>
          <label><h4>Set Date</h4></label>
          <input type="date" />
        </div>
        <div className='form-control'>
          <label><h4>Select District</h4></label>
          <select>
              <option value="">Select</option>
              <option value="Maseru">Maseru</option>
              <option value="Leribe">Leribe</option>
              <option value="Berea">Berea</option>
              <option value="Thaba-Tseka">Thaba-Tseka</option>
              <option value="Mafeteng">Mafeteng</option>
              <option value="Mohale's Hoek">Mohale's Hoek</option>
              <option value="Quthing">Quthing</option>
              <option value="Qacha's Nek">Qacha's Nek</option>
              <option value="Mokhotlong">Mokhotlong</option>
              <option value="Butha-Buthe">Butha-Buthe</option>
          </select>
        </div>
        <div className='form-control'>
          <label><h4>Select Hospital</h4></label>
          <select>
              <option value="">Select</option>
              <option value="Maseru">Queen 'Mamohato Memorial Hospital</option>
              <option value="Leribe">Motebang Hospital</option>
              <option value="Berea">Berea Hospita</option>
              <option value="Thaba-Tseka">Scott Hospital</option>
              <option value="Mafeteng">Mafeteng Hospital</option>
              <option value="Mohale's Hoek">St. Joseph's Hospital</option>
              <option value="Quthing">Tsepong II Hospital</option>
              <option value="Mokhotlong">Mokhotlong Hospital</option>
              <option value="Butha-Buthe">Butha-Buthe Hospital</option>
          </select>
        </div>
        <div className='form-control'>
          <label><h4>Select Doctor</h4></label>
          <select>
              <option value="">Select</option>
              <option value="Maseru">Maseru</option>
              <option value="Leribe">Leribe</option>
              <option value="Berea">Berea</option>
              <option value="Thaba-Tseka">Thaba-Tseka</option>
              <option value="Mafeteng">Mafeteng</option>
              <option value="Mohale's Hoek">Mohale's Hoek</option>
              <option value="Quthing">Quthing</option>
              <option value="Qacha's Nek">Qacha's Nek</option>
              <option value="Mokhotlong">Mokhotlong</option>
              <option value="Butha-Buthe">Butha-Buthe</option>
          </select>
        </div>
      </div>
      <textarea id="comment-input" rows="4" cols="50" placeholder="Enter reason for appointment"></textarea>
      <div className='links'>
        <Link to='/menu'> <IoIosArrowBack/>Go back</Link>
      </div>
      <input type='submit' value='submit' className='btn btn-block'/>
    </div>
  )
}

export default SetAppointment
