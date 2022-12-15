import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/mainPage/mainPage';
import Wheel from './pages/wheelPage/wheelPage';
import SecondWheel from './components/SecondWheel/SecondWheel.js';
import Suggestions from './components/Suggestions/Suggestions';
import Login from './components/Login/Login';
import Signup  from './components/SignUp/SignUp';
import User from './components/Calendar/Calendar';
import data from './data.json';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element ={<Main/>} />
        <Route path='/wheel' element ={<Wheel emotions={data}/>} />
        <Route path='/wheel/:id' element ={<SecondWheel data={data}/>} />
        <Route path='/suggestions/:id/:index' element ={<Suggestions data={data}/>} />
        <Route path='/login' element ={<Login/>} /> 
        <Route path='/signup' element ={<Signup/>} /> 
         <Route path='/calendar' element ={<User/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
