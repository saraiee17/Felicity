import './Wheel.scss';
import { Link,useNavigate} from "react-router-dom";
import shovel from '../../assets/shovel.png';
import cog from '../../assets/cog.png';

function Wheel({emotions}){
    const navigate = useNavigate();

    // setTimeout(() => {
    //     navigate(`/wheel/${emotion.id}`);
    //   }, "4000")

    return(
        <div className='wheel'>
            <div className='wheel__flex'>
            <Link to='/'><img className='return'src={shovel} alt='return arrow/shuvel'/></Link>
            <h2 className='wheel__title'>How are you feeling?</h2>
            </div>
            <img className='wheel__cog'src={cog} alt='circle'/>
            <div className='wheel__container'>
            {emotions.map((emotion)=>{
                return <Link to= {`/wheel/${emotion.id}`} key={emotion.id} className={`wheel__emotion--text${emotion.id}`}>{emotion.emotion}</Link>
             })}
             </div>
        </div>
    )
}

export default Wheel;
