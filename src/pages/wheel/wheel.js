import './wheel.scss';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import emotions from '../../data.json';

function wheel({object}){
console.log(object);

    return(
        <div className='wheel'>
            <h2>wheel</h2>
            {emotions.map((emotion)=>{
                return <Link to={`/wheel`} className='emotion' key={emotion.id}>  
                <p className='emotion__text'>{emotion.emotion}</p>
                </Link>
             })}
        </div>
    )
}

export default wheel;