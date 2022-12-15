import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Main from './pages/main/main';
import Wheel from './pages/wheel/wheel';
import SecondWheel from './components/SecondWheel/SecondWheel.js';
import Suggestions from './components/Suggestions/Suggestions';
import Login from './components/Login/Login';
import Signup  from './components/SignUp/SignUp';
import User from './components/Calendar/Calendar';
import data from './data.json';
import Nav from './components/Nav/Nav';

function App() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
      const token = sessionStorage.getItem('token');

      if (!token) {
          return setFailedAuth(true);
      }

      // Get the data from the API 
      if(token){
      axios.get('http://localhost:8080/users/calendar', {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
          .then((response) => {
              setUser(response.data);
          })
          .catch((error) => {
              console.log(error);
              setFailedAuth(true);
          });
      }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setUser(null);
    setFailedAuth(true);
  };

  const handleLogin=(user)=>{
    setUser(user);
    setFailedAuth(false);
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element ={<Main/>}/>
        <Route path='/wheel' element ={<Wheel emotions={data}/>} />
        <Route path='/wheel/:id' element ={<SecondWheel data={data} user={user}/>} />
        <Route path='/suggestions/:id/:index' element ={<Suggestions data={data}/>} />
        <Route path='/login' element ={<Login handleLogin={handleLogin}/>} /> 
        <Route path='/signup' element ={<Signup/>} /> 
        <Route path='/calendar' element ={<User failedAuth={failedAuth} user={user}/>} />
        </Routes>
        <Nav handleLogout={handleLogout}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
