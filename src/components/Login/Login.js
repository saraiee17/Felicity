import './Login.scss';
import {Link} from 'react-router-dom';


function Login(){
    return(
        <div className='login'>
            <form className="login__form" >
                <h1 className="login__title">Log in</h1>

              
                <label htmlFor='Email' >Email</label>
                <input type="text" name="email" label="email" />
            

           
                <label htmlFor='password' >Password</label>
                <input type="password" name="password" label="Password" />
           

                <button className="login__button">
                    Log in
                </button>

                {/* {error && <div className="login__message">Failed to login</div>} */}
            </form>
            <p>
                Need an account? <Link to="/signup">Sign up</Link>
            </p>

        </div>
    )
}

export default Login;