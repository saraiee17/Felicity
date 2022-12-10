import './Main.scss';
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
            <div className='flex'>
                <Link to='/login'><img  className='return'src={login2} alt='return arrow/shuvel'/></Link>
                <Link to='/calendar'><button  className='userpage' alt='my page'>My Page</button></Link>
            </div>
            <h2 className='main__title'>Felicity</h2>
            <Link to='/wheel'><img className='logo' src={logo} alt='wheel'/></Link>
        </div>
    )
}

export default Main;