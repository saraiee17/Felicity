import './wheel.scss';
import { Link,useNavigate} from "react-router-dom";
import cog from '../../assets/cog.png';

function Wheel({emotions}){
const navigate= useNavigate();

    return(
        <div className='wheel'>
            <div className='wheel__flex'>
                <h2 className='wheel__title'>How are you feeling?</h2>
            </div>
            <img className='wheel__cog'src={cog} alt='wooden cog in the center fo the wheel'/>
            <div className='wheel__container'>
            {emotions.map((emotion)=>{
                return <Link to= {`/wheel/${emotion.id}`}  onClick={(e) => {e.preventDefault(); setTimeout(() => {navigate(`/wheel/${emotion.id}`)  }, 4000) }}  key={emotion.id} className={`wheel__emotion--text${emotion.id}`}>{emotion.emotion}</Link>
             })}
             </div>
        </div>
    )
}

export default Wheel;
