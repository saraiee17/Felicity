import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/main/main';
import Wheel from './pages/wheel/wheel';
import SecondWheel from './components/SecondWheel/SecondWheel.js';
import Suggestions from './components/Suggestions/Suggestions';
import Login from './components/Login/Login';
import data from './data.json';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element ={<Main/>} />
        <Route path='/wheel' element ={<Wheel emotions={data}/>} />
        <Route path='/wheel/:id' element ={<SecondWheel data={data}/>} />
        <Route path='/suggestions' element ={<Suggestions/>} />
        <Route path='/login' element ={<Login/>} /> 
        {/* <Route path='/calendar' element ={<Calendar/>} />
        <Route path='/graphs' element ={<Graphs/>} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
