import './Suggestions.scss';
import {useParams} from 'react-router-dom';
import {useState,useRef} from 'react'
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

// logic to toggle audio for talk to friend
const audioRef =useRef(null);
const [isPlaying,setIsPlaying]=useState(false);

const handlePlay = (event) =>{
    if (isPlaying) {
        // Pause the song if it is playing
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
  
        // Play the song if it is paused
        audioRef.current.play();
        setIsPlaying(true);
      }
}
  


//logic for write suggestion
const [writeValue,setWriteValue]=useState('');

const handleWriteInput = event =>{
    setWriteValue(event.target.value);
}

    return(
        <div className='suggestions'>
            <div className='suggestions__div'>
            <h2 className='suggestions__title'>Best thing to do is:</h2>
            <p>{suggestion}</p>
            {suggestion[0] === 'go outside and get some fresh air' ? 
            <div className='outside'>
                <video  width="320" height="240" loop autoPlay>
                    <source  src={outside}type="video/mp4" />
                 </video>
                 <a className='a' href='https://www.google.com/maps/@41.7570706,-100.6509655,3.96z'><button className='button'>Find Park near me</button></a>
            </div>
             : ""}
            {suggestion[0] === "take a 15 minute power nap"? 
                 <div className='sleep'>
                 <video  width="320" height="240" loop autoPlay>
                     <source  src={rain}type="video/mp4" />
                  </video>
                  <a className='a' href='https://www.webmd.com/balance/features/get-energy-back'><button className='button'>Longterm fatigue?</button></a>
                  <img className='sleep__sheep' src={sheep} alt='sheep'/>
             </div>
            : ""}
            {suggestion[0] === "read a chapter of a good book"?
            <div className='bookflex'>
                <a className='a' href='https://hpread.scholastic.com/HP_Book1_Chapter_Excerpt.pdf'><img className='book' src={harrypotter} alt='harry potter and the sorcerers stone'/></a> 
                <a className='a' href='https://antilogicalism.com/wp-content/uploads/2018/04/slaughterhouse-five.pdf'><img className='book' src={kurt} alt='kurt book'/></a> 
                <a className='a' href='https://s3.amazonaws.com/scschoolfiles/112/j-r-r-tolkien-lord-of-the-rings-01-the-fellowship-of-the-ring-retail-pdf.pdf'><img className='book' src={rings} alt='kurt book'/></a> 
             </div>
             : ""}
            {suggestion[0] === "take a social media break"? 
            <div className='screen'>
                <div className='screen__flex' >
                    <img className='screen__phone' src={phone} alt='mute phone'/>
                </div >
                <div className='screen__buttonflex'>
                    <a className='a' href='https://apps.apple.com/us/app/freedom-block-distractions/id1269788228?mt=8'><button className='button'>iOS</button></a>
                    <a className='a' href='https://play.google.com/store/apps/details?id=to.freedom.android2&pli=1'><button className='button'>Android </button></a>
                    <a className='a' href='https://chrome.google.com/webstore/detail/strict-workflow/cgmnfnmlficgeijcalkgnnkigkefkbhd?hl=en'><button className='button'>Desktop</button></a>
                </div>
            </div>
            : ""}
            {suggestion[0] === "reduce screentime"? 
            <div className='screen'>
                <div className='screen__flex' >
                <video  width="320" height="240" loop autoPlay>
                     <source  src={laptop}type="video/mp4" />
                </video>
                </div>
                <div className='screen__buttonflex'>
                    <a className='a' href='https://apps.apple.com/us/app/freedom-block-distractions/id1269788228?mt=8'><button className='button'>iOS</button></a>
                    <a className='a' href='https://play.google.com/store/apps/details?id=to.freedom.android2&pli=1'><button className='button'>Android </button></a>
                    <a className='a' href='https://chrome.google.com/webstore/detail/strict-workflow/cgmnfnmlficgeijcalkgnnkigkefkbhd?hl=en'><button className='button'>Desktop</button></a>
                </div>
            </div>
            : ""}
            {suggestion[0] === "talk to a friend."? 
            <div className='friend'>
                <div className='friend__flex'>
                    <video className='friend__1' width="320" height="240" loop autoPlay >
                        <source className='friend__1' src={friend1}type="video/mp4" />
                    </video>
                    <video  className='friend__2' width="320" height="240" loop autoPlay>
                        <source  className='friend__2'src={friend2}type="video/mp4" />
                    </video>
                    <video className='friend__3' width="320" height="240" loop autoPlay>
                        <source  className='friend__3'src={friend3}type="video/mp4" />
                    </video>
                </div>
                <audio ref={audioRef} src={friend} />
               <button className ='button' onClick={handlePlay}>I'd rather listen</button>
            </div>
            : ""}
            {suggestion[0] === "take 3 deep breaths and empty your mind/meditate"? 
            <div className="breathe" >
                <video className="breathe__video1" width="320" height="240" loop autoPlay>
                     <source  src={breathe}type="video/mp4" />
                </video>
                <video  className="breathe__video2" width="320" height="240" loop autoPlay>
                     <source  src={breathevideo}type="video/mp4" />
                </video>
            </div>
            : ""}
            {suggestion[0] === "Practice deep breathing"? 
            <div className="breathe" >
                <video  className="breathe__video1" width="320" height="240" loop autoPlay>
                        <source  src={breathe}type="video/mp4" />
                </video>
                <video className="breathe__video2"  width="320" height="240" loop autoPlay>
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
                    <img className='others__1'src={others2} alt='giving gift to someone else'/> 
                    <img className='others__2'src={others} alt='giving gift to someone else'/>      
                    <img className='others__3'src={others3} alt='giving gift to someone else'/> 
                </div>
                <a className='a' href='https://bucketlistjourney.net/random-acts-of-kindness-ideas-and-examples/'><button className='button'>More Ideas</button></a>
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
            {suggestion[0] === "Ponder why and enjoy"? 
                <img className='enjoy'src={enjoy} alt='cascade of flowers'/>
            : ""}
            </div>
        </div>
    )
}

export default Suggestions;