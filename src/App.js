import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Header from './components/Header';
import SetAppointment from './components/SetAppointment';
import ViewAppointments from './components/ViewAppointments';

const App = () => {
  return (
    <Router>
      <div>
      <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/viewappointments' element={<ViewAppointments />} />
          <Route path='/setappointment' element={<SetAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
