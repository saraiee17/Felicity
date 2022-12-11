import './main.scss';
import {Link,useNavigate} from 'react-router-dom';
import logo from '../../assets/felicitylogo.png';
import login2 from '../../assets/login2.png';


function Main(){
    // const navigate = useNavigate();

    // setTimeout(() => {
    //     navigate(`/wheel`);
    //   }, "4000")

    return(
        <div className='main'>
            <div className='main__flex'>
                <h2 className='main__title'>Felicity</h2>
            </div>
            <Link to='/wheel'><img className='logo' src={logo} alt='wheel'/></Link>
        </div>
    )
}

export default Main;