import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { BsPersonFillAdd } from 'react-icons/bs'
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { FaBriefcaseMedical } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { RiUserSettingsFill } from 'react-icons/ri'
import { BiHelpCircle } from 'react-icons/bi'

const Menu = () => {
  return (
    <div className='container-menu'>
      <h1>Dashboard</h1> 
      <div class="grid-container">
        <div class="block" style={{backgroundColor: 'blue'}}>
            <h1><BsFillCalendarDayFill /></h1>
            <div className='links'>
                <Link to='/SetAppointment'> Set Appointment</Link>
            </div> 
        </div>
        <div class="block" style={{backgroundColor: 'blue'}}>
            <h1><BsFillCalendarDayFill /></h1>
            <div className='links'>
                <Link to='/ViewAppointments'> View Appointment</Link>
            </div> 
        </div>
        <div class="block" style={{backgroundColor: 'red'}}>
        <h1><FaBriefcaseMedical /></h1>
            <div className='links'>
                <Link to='/'>Medical Record</Link>
            </div> 
        </div>
        <div class="block" style={{backgroundColor: 'purple'}}>
        <h1><GiReceiveMoney /></h1>
            <div className='links'>
                <Link to='/'>Billing</Link>
            </div> 
        </div>
        <div class="block" style={{backgroundColor: '#6495ED'}}>
        <h1><RiUserSettingsFill /></h1>
            <div className='links'>
                <Link to='/'>Profile</Link>
            </div> 
        </div>
        <div class="block" style={{backgroundColor: 'orange'}}>
        <h1><BsPersonFillAdd /></h1>
            <div className='links'>
                <Link to='/SignUp'>Add User</Link>
            </div> 
        </div>
        <div class="block" style={{backgroundColor: '#443b3e'}}>
        <h1><BiHelpCircle /></h1>
            <div className='links'>
                <Link to='/'>Help & support</Link>
            </div> 
        </div>
      </div>
      <div className='links'>
            <Link to='/'> <IoIosArrowBack/>Go back</Link>
      </div>
    </div>
  )
}

export default Menu
