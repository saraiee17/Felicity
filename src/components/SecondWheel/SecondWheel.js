import './SecondWheel.scss';
import {Link,useParams} from 'react-router-dom';
import shovel from '../../assets/shovel.png';
import cog from '../../assets/cog.png';


function SecondWheel({data}){
const params= useParams();
const found = data.find(object => object.id === params.id);
const array=found.inneremotions;
    return(
        <div className='secondwheel'>
            <div className='wheel__flex'>
            <Link to='/wheel'><img className='return'src={shovel} alt='return arrow/shuvel'/></Link>
            <h2 className='secondwheel__title'>How are you really feeling?</h2>
            </div>
            <img className='secondwheel__cog'src={cog} alt='circle'/>
            <div className='secondwheel__container'>
            {array.map((object,index)=>{
                return <Link to={`/suggestions/${found.id}/${index}`} className={`secondwheel__text${index}`} key={index}>{Object.keys(object)}</Link>
             })}
             </div>
        </div>
    )
}

export default SecondWheel;