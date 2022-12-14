import './SecondWheel.scss';
import {Link,useParams} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import cog from '../../assets/cog.png';


function SecondWheel({data,user}){
//get specific emotion array from URL
const params= useParams();
const found = data.find(object => object.id === params.id);
const array=found.inneremotions;

//logic to post emotion to backend if user loggedin
useEffect(() => {
    if(user){
    axios.post("http://localhost:8080/emotions", {
        user_id: user.id,
        emotion: found.emotion
    })
    .then(() => {
        console.log('yay!!!')
    })
    .catch((error) => {
        console.log(error.response.data);
    });
    }
}, []);

    return(
        <div className='secondwheel'>
            <div className='wheel__flex'>
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