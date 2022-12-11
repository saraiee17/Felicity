import './Suggestions.scss';
import {useParams,Link} from 'react-router-dom';
import {useState} from 'react'
import harrypotter from '../../assets/harrypotter.png';
import kurt from '../../assets/kurt.png';
import rings from '../../assets/rings.png';
import outside from '../../assets/gooutside.mp4';
import rain from '../../assets/rain.mp4';
import sheep from '../../assets/sheep.png';
import phone from '../../assets/phone.png';
import laptop from '../../assets/laptop.mp4';
import friend1 from '../../assets/friend1.mp4';
import friend2 from '../../assets/friend2.mp4';
import friend3 from '../../assets/friend3.mp4';
import friend from '../../assets/friend.mp3';
import breathe from '../../assets/breathe.mp4';
import breathevideo  from '../../assets/breathevideo.mp4';
import stretchvideo from '../../assets/stretch.mp4';
import others from '../../assets/others.png';
import others2 from '../../assets/others2.png';
import others3 from '../../assets/others3.png';
import happy from  '../../assets/happy.mp4';
import happyaudio from '../../assets/happy.mp3';
import enjoy from '../../assets/enjoy.png';

function Suggestions({data}){
const params= useParams();

//logic to grab suggestion 
const found= data.find(object => object.id === params.id);
const array=found.inneremotions;
const item = array.at(params.index);
const suggestion= Object.values(item);

//audio for talk to friend
const playAudio = () => {
    new Audio(friend).play();
  }

//logic for write suggestion
const [writeValue,setWriteValue]=useState('');

const handleWriteInput = event =>{
    setWriteValue(event.target.value);
}

    return(
        <div className='suggestions'>
            <Link to='/'><button>Home</button></Link>
            <div className='suggestions__div'>
            <h2 className='suggestions__title'>Best thing to do is:</h2>
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
                 <div className='sleep'>
                 <video  width="320" height="240" loop autoPlay>
                     <source  src={rain}type="video/mp4" />
                  </video>
                  <a href='https://www.webmd.com/balance/features/get-energy-back'><button className='sleep__button'>Longterm fatigue?</button></a>
                  <img className='sleep__sheep' src={sheep} alt='sheep'/>
             </div>
            : ""}
            {suggestion[0] === "read a chapter of a good book"?
            <div className='bookflex'>
             <a href='https://hpread.scholastic.com/HP_Book1_Chapter_Excerpt.pdf'><img className='book' src={harrypotter} alt='harry potter and the sorcerers stone'/></a> 
             <a href='https://antilogicalism.com/wp-content/uploads/2018/04/slaughterhouse-five.pdf'><img className='book' src={kurt} alt='kurt book'/></a> 
             <a href='https://s3.amazonaws.com/scschoolfiles/112/j-r-r-tolkien-lord-of-the-rings-01-the-fellowship-of-the-ring-retail-pdf.pdf'><img className='book' src={rings} alt='kurt book'/></a> 
             </div>
             : ""}
            {suggestion[0] === "take a social media break"? 
            <div className='screen'>
                <div className='screen__flex' >
                <video  width="320" height="240" loop autoPlay>
                     <source  src={laptop}type="video/mp4" />
                </video>
                <img className='screen__phone' src={phone} alt='mute phone'/>
                </div>
                <a href='https://apps.apple.com/us/app/freedom-block-distractions/id1269788228?mt=8'><button>iOS</button></a>
                <a href='https://play.google.com/store/apps/details?id=to.freedom.android2&pli=1'><button>Android </button></a>
                <a href='https://chrome.google.com/webstore/detail/strict-workflow/cgmnfnmlficgeijcalkgnnkigkefkbhd?hl=en'><button>Desktop</button></a>
            </div>
            : ""}
            {suggestion[0] === "reduce screentime"? 
            <div className='screen'>
                <div className='screen__flex' >
                <video  width="320" height="240" loop autoPlay>
                     <source  src={laptop}type="video/mp4" />
                </video>
                <img className='screen__phone' src={phone} alt='mute phone'/>
                </div>
                <a href='https://apps.apple.com/us/app/freedom-block-distractions/id1269788228?mt=8'><button>iOS</button></a>
                <a href='https://play.google.com/store/apps/details?id=to.freedom.android2&pli=1'><button>Android </button></a>
                <a href='https://chrome.google.com/webstore/detail/strict-workflow/cgmnfnmlficgeijcalkgnnkigkefkbhd?hl=en'><button>Desktop</button></a>
            </div>
            : ""}
            {suggestion[0] === "talk to a friend. Call someone, write a letter, or reach out in person."? 
            <div className='friend'>
                <div className='friend__flex'>
                    <video  width="320" height="240" loop autoPlay>
                        <source  src={friend1}type="video/mp4" />
                    </video>
                    <video  width="320" height="240" loop autoPlay>
                        <source  src={friend2}type="video/mp4" />
                    </video>
                    <video  width="320" height="240" loop autoPlay>
                        <source  src={friend3}type="video/mp4" />
                    </video>
                </div>
                <button onClick={playAudio}>I'd rather listen</button>
            </div>
            : ""}
            {suggestion[0] === "take 3 deep breaths and empty your mind/meditate"? 
            <div>
                <video  width="320" height="240" loop autoPlay>
                     <source  src={breathe}type="video/mp4" />
                </video>
                <video  width="320" height="240" loop autoPlay>
                     <source  src={breathevideo}type="video/mp4" />
                </video>
            </div>
            : ""}
            {suggestion[0] === "Practice deep breathing"? 
            <div>
                <video  width="320" height="240" loop autoPlay>
                        <source  src={breathe}type="video/mp4" />
                </video>
                <video  width="320" height="240" loop autoPlay>
                        <source  src={breathevideo}type="video/mp4" />
                </video>
            </div>
            : ""}
            {suggestion[0] === "Take 10 minutes to do something calming"? 
            <div className='stretch'>
                <video  width="320" height="240" loop autoPlay>
                        <source  src={stretchvideo}type="video/mp4" />
                </video>
            </div>
            : ""} 
            {suggestion[0] === "do something nice for someone else"? 
            <div className='others'>
                <div  className='others__flex'>
                    <img className='others__img'src={others2} alt='giving gift to someone else'/> 
                    <img className='others__img'src={others} alt='giving gift to someone else'/>      
                    <img className='others__img'src={others3} alt='giving gift to someone else'/> 
                </div>
                <a href='https://bucketlistjourney.net/random-acts-of-kindness-ideas-and-examples/'><button>More Ideas</button></a>
            </div>
            : ""}
            {suggestion[0] === "write down your thoughts"? 
            <div className='write'>
                <p className='write__title'>{writeValue}</p>
                <input class="write__input" onChange={handleWriteInput} value={writeValue}  placeholder="Go ahead type..."/>
            </div>
            : ""}
            {suggestion[0] === "do something small that makes you happy"? 
            <div className='happy'>
                <p>Like Dance</p>
                <video  width="320" height="240" loop autoPlay>
                    <source  src={happy}type="video/mp4" />
                </video>
                <audio controls autoplay>
                    <source src={happyaudio} type="audio/mpeg"/>      
                </audio>
            </div> 
            : ""}
            {suggestion[0] === "Ponder why and enjoy. Congrats!! "? 
            <img className='enjoy'src={enjoy} alt='cascade of flowers'/>
            : ""}
            </div>
        </div>
    )
}

export default Suggestions;