import './main.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/felicitylogo.png';
import login2 from '../../assets/login2.png';



function main(){

    return(
        <div className='main'>
            <div className='flex'>
            <Link to='/login'><img  className='return'src={login2} alt='return arrow/shuvel'/></Link>
            </div>
            <h2 className='main__title'>Felicity</h2>
            <Link to='/wheel'><img className='logo' src={logo} alt='wheel'/></Link>
        </div>
    )
}

export default main;