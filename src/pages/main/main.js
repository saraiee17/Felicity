import './main.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/felicitylogo.png';


function Main(){

    return(
        <div className='main'>
                <h2 className='main__title'>Felicity</h2>
            <Link to='/wheel'><img className='logo' src={logo} alt='wooden garden wheel filled with different flowers'/></Link>
        </div>
    )
}

export default Main;