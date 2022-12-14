import './Nav.scss';
import {Link} from 'react-router-dom';


function Nav({handleLogout}){
    return(
        <div className='nav'>
            <div onClick={() => window.history.back()}><span class="material-symbols-outlined nav__icon">arrow_back</span></div>
            <Link to='/'><span className="material-symbols-outlined nav__icon">cottage</span></Link>
            <Link to='/login'><span className="material-symbols-outlined nav__icon">login</span></Link>
            <Link to='/calendar'><span className="material-symbols-outlined nav__icon">account_circle</span></Link>
            <span onClick={()=>handleLogout()} class="material-symbols-outlined nav__icon">logout</span>
        </div>
    )
}

export default Nav;