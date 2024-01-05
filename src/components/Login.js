import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/menu');
  }
  return (
    <div className='container'>
      <h1>Sign in</h1>
      <div className='form-control'>
        <label><h4>Username</h4></label>
        <input type='text' placeholder='rabeah@hotmail.com'/>
      </div>
      <div className='form-control'>
        <label><h4>Password</h4></label>
        <input type='password' placeholder='**********'/>
      </div>
      <div className="links">
        <Link to="forgotpassword">Forgot Password?</Link>                
      </div>
      <input 
        type='submit'
        value='login'
        className='btn btn-block'
        onClick={handleLogin}
        />
    </div>
  )
}

export default Login

