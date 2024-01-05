import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'


import '@fortawesome/fontawesome-free/css/all.min.css';

const ForgotPassword = () => {
  return (
    <div className='container'>
      <h1><AiOutlineExclamationCircle style={{color: 'red'}}/></h1>
      <h1>Forgot Password</h1>
      <p>Enter your email to recieve a link to reset your password</p>
        <div className="inputWithIcon">
            <input type="text" placeholder="Email" className="email-input" />
            <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
        </div>
      <div className='links'>
        <Link to='/'> <IoIosArrowBack/>Go back</Link>
      </div>
      <input type='submit' value='submit' className='btn btn-block'/>
    </div>
  )
}

export default ForgotPassword
