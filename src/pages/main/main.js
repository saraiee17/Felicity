import './main.scss';
import {Link,useNavigate} from 'react-router-dom';
import emotions from '../../data.json';
import logo from '../../assets/felicitylogo.png';
import login1 from '../../assets/login1.png';
import login2 from '../../assets/login2.png';

function main(){
    // const navigate = useNavigate();

    // useEffect(() => {
    //       navigate('/login');
    // }, []);
    
    // const login  =(e)=>{
    //     e.preventDefault();
    //     navigate(`/login`);
    //   };

    return(
        <div className='main'>
            <div className='flex'>
            <img className='return'src={login1} alt='return arrow/shuvel'/>
            <img  className='return'src={login2} alt='return arrow/shuvel'/>
            </div>
            <h2 className='main__title'>Felicity</h2>
            <Link to='/wheel'><img className='logo' src={logo} alt='wheel'/></Link>
        </div>
    )
}

export default main;