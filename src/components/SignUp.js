import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const SignUp = () => {
  return (
    <div className='container'>
        <h1>Register</h1>
        <div className="inputWithIcon">
            <input type="text" placeholder="First name"/>
            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div className="inputWithIcon">
            <input type="text" placeholder="Second name"/>
            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div className="inputWithIcon">
            <input type="text" placeholder="Email" className="email-input" />
            <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div className='form-control'>
            <label><h4>Select Your Birth Date</h4></label>
            <input type="date" />
        </div>
        <div className='form-control'>
            <label><h4>Select Your Gender</h4></label>
            <select>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className='form-control'>
            <label><h4>Select Your District</h4></label>
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

        <div className="inputWithIcon">
            <input type="text" placeholder="Password"/>
            <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div className="inputWithIcon">
            <input type="text" placeholder="Confirm Password"/>
            <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div className='links'>
            <Link to='/menu'> <IoIosArrowBack/>Go back</Link>
        </div> 
        <input type='submit' value='submit' className='btn btn-block'/>     
    </div>
  )
}

export default SignUp
