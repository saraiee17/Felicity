import './SignUp.scss';
import {Link} from 'react-router-dom';

function SignUp(){
    return(
        <div className='signup'>
               <form className="signup" >
                <h1 className="signup__title">Sign up</h1>

                <input type="text" name="first_name" label="First name" />
                <input type="text" name="last_name" label="Last name" />
                <input type="text" name="email" label="Email" />
                <input type="password" name="password" label="Password" />

                <button className="signup__button">Sign up</button>

                {/* {success && <div className="signup__message">Signed up!</div>}
                {error && <div className="signup__message">{error}</div>} */}
            </form>
            <p>
                Have an account? <Link to="/login">Log in</Link>
            </p> 
        </div>
    )
}

export default SignUp;