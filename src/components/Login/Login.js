import './Login.scss';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Login(){
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post("http://localhost:8080/users/login", {
            email: event.target.email.value,
            password: event.target.password.value
        })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                navigate('/calendar');
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    };
    return(
        <div className='login'>
            <form className="login__form" onSubmit={handleSubmit}>
                <h1 className="login__title">Log in</h1>

              
                <label htmlFor='Email' >Email</label>
                <input type="text" name="email" label="email" />
            

           
                <label htmlFor='password' >Password</label>
                <input type="password" name="password" label="Password" />
           

                <button className="login__button">
                    Log in
                </button>

                {error && <div className="login__message">Failed to login</div>}
            </form>
            <p>
                Need an account? <Link to="/signup">Sign up</Link>
            </p>

        </div>
    )
}

export default Login;