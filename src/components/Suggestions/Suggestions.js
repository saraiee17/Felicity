import './Suggestions.scss';
import {useParams} from 'react-router-dom';


function Suggestions({data}){
const params= useParams();

const found= data.find(object => object.id === params.id);
const array=found.inneremotions;
const item = array.at(params.index);
const suggestion= Object.values(item);
console.log(suggestion)

    return(
        <div className='suggestions'>
            <h2 className='Suggestions__title'>Best thing to do is:</h2>
            <p>{suggestion}</p>
            
        </div>
    )
}

export default Suggestions;