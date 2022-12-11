import './Nav.scss';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <>
            <span class="material-symbols-outlined arrow">arrow_back</span>
            <Link to='/login'><span class="material-symbols-outlined">login</span></Link>
            <Link to='/login'><span class="material-symbols-outlined">cottage</span></Link>
            <Link to='/calendar'><span class="material-symbols-outlined">account_circle</span></Link>
        </>
    )
}

export default Nav; 