import './wheel.scss';
import { Link} from "react-router-dom";
import shovel from '../../assets/shovel.png'

function wheel({emotions}){

    // const edited=`wheel__emotion--text${0}`+=1;

    return(
        <div className='wheel'>
            <div className='wheel__flex'>
            <img className='return'src={shovel} alt='return arrow/shuvel'/>
            <h2 className='wheel__title'>How are you feeling?</h2>
            </div>
            <div className='wheel__container'>
            {emotions.map((emotion)=>{
                return <Link to= {`/wheel/${emotion.id}`} key={emotion.id} className={`wheel__emotion--text${emotion.id}`}>{emotion.emotion}</Link>
             })}
             </div>
        </div>
    )
}

export default wheel;
