import './Suggestions.scss';
import {useParams,Link} from 'react-router-dom';
import harrypotter from '../../assets/harrypotter.png';
import kurt from '../../assets/kurt.png';
import rings from '../../assets/rings.png';
import outside from '../../assets/gooutside.mp4';
import rain from '../../assets/rain.mp4';

function Suggestions({data}){
const params= useParams();

const found= data.find(object => object.id === params.id);
const array=found.inneremotions;
const item = array.at(params.index);
const suggestion= Object.values(item);
console.log(suggestion)

    return(
        <div className='suggestions'>
            <Link to='/'><button>Home</button></Link>
            <h2 className='Suggestions__title'>Best thing to do is:</h2>
            <p>{suggestion}</p>
            {suggestion[0] === 'go outside and get some fresh air' ? 
            <div className='outside'>
                <video  width="320" height="240" loop autoPlay>
                    <source  src={outside}type="video/mp4" />
                 </video>
                 <a href='https://www.google.com/maps/@41.7570706,-100.6509655,3.96z'><button className='outside__button'>Find Park near me</button></a>
            </div>
             : ""}
            {suggestion[0] === "take a 15 minute power nap"? 
                 <div className='outside'>
                 <video  width="320" height="240" loop autoPlay>
                     <source  src={rain}type="video/mp4" />
                  </video>
                  {/* <a href='https://www.google.com/maps/@41.7570706,-100.6509655,3.96z'><button className='outside__button'>Find Park near me</button></a> */}
             </div>
            : ""}
            {suggestion[0] === "read a chapter of a good book"?
            <div className='bookflex'>
             <a href='https://hpread.scholastic.com/HP_Book1_Chapter_Excerpt.pdf'><img className='book' src={harrypotter} alt='harry potter and the sorcerers stone'/></a> 
             <a href='https://antilogicalism.com/wp-content/uploads/2018/04/slaughterhouse-five.pdf'><img className='book' src={kurt} alt='kurt book'/></a> 
             <a href='https://s3.amazonaws.com/scschoolfiles/112/j-r-r-tolkien-lord-of-the-rings-01-the-fellowship-of-the-ring-retail-pdf.pdf'><img className='book' src={rings} alt='kurt book'/></a> 
             </div>
             : ""}
            {suggestion[0] === "take a social media break"? <p>4</p> : ""}
            {suggestion[0] === "do somethng small that makes you happy"? <p>5</p> : ""}
            {suggestion[0] === "Congrats!! Ponder why and enjoy the flowers."? <p>6</p> : ""}
            {suggestion[0] === "write down your thoughts"? <p>7</p> : ""}
            {suggestion[0] === "take 3 deep breaths and empty your mind/meditate"? <p>9</p> : ""}
            {suggestion[0] === "smell lavendar"? <p>10</p> : ""}
            {suggestion[0] === "reduce screentime"? <p>11</p> : ""}
            {suggestion[0] === "do something nice for someone else"? <p>12</p> : ""}
            {suggestion[0] === "Practice deep breathing"? <p>13</p> : ""}
            {suggestion[0] === "Take 10 minutes to do something calming"? <p>14</p> : ""}
            {suggestion[0] === "talk to a friend"? <p>15</p> : ""}

        </div>
    )
}

export default Suggestions;