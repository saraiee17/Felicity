import './SecondWheel.scss';
import {Link,useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import emotions from '../../data.json';
import shovel from '../../assets/shovel.png';
import wood from '../../assets/secondwheel.png';

function SecondWheel({data}){
const params= useParams();
const found = data.find(object => object.id === params.id);
const array=found.inneremotions;


    return(
        <div className='secondwheel'>
            <div className='wheel__flex'>
            <img className='return'src={shovel} alt='return arrow/shuvel'/>
            <h2 className='secondwheel__title'>How are you really feeling?</h2>
            </div>
            <div className='secondwheel__container'>
            {array.map((object,index)=>{
                return <div className={`secondwheel__text${index}`} key={index}>{Object.keys(object)}</div>
             })}
             </div>
        </div>
    )
}

export default SecondWheel;