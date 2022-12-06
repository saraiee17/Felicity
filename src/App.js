import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/main/main';
import Wheel from './pages/wheel/wheel';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element ={<Main/>} />
        <Route path='/wheel' element ={<Wheel/>} />
        <Route path='/wheel:id' element ={<Wheel/>} />
        {/* <Route path='/login' element ={<Login/>} />
        <Route path='/calendar' element ={<Calendar/>} />
        <Route path='/graphs' element ={<Graphs/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
