import './SignUp.scss';
import {Link} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

function SignUp(){
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8080/users/signup", {
                email: event.target.email.value,
                password: event.target.password.value,
                first_name: event.target.first_name.value,
                last_name: event.target.last_name.value
            })
            .then(() => {
                setSuccess(true);
                setError("");
                event.target.reset();
            })
            .catch((error) => {
                setSuccess(false);
                setError(error.response.data);
            });
    };
    return(
        <div className='signup'>
             <form className="signup__form"  onSubmit={handleSubmit}>
                <h1 className="signup__title">Sign up</h1>

                <div className='signup__tabletflex'>
                <div className='signup__flex signup__left'>
                <label className="signup__label" htmlFor='first_name' >First Name</label>
                <input type="text" name="first_name" label="First name" />
                <label className="signup__label" htmlFor='last_name' >Last Name</label>
                <input type="text" name="last_name" label="Last name" />
                </div>
                
                <div className='signup__flex'>
                <label className="signup__label" htmlFor='email' >Email</label>
                <input type="text" name="email" label="Email" />
                <label className="signup__label" htmlFor='password' >Password</label>
                <input type="password" name="password" label="Password" />
                </div>
                </div>

                <button className="signup__button">Sign up</button>

                {success && <div className="signup__message">Signed up!</div>}
                {error && <div className="signup__message">{error}</div>}
            </form>
            <p>
                Have an account? <Link to="/login">Log in</Link>
            </p> 

        </div>
    )
}

export default SignUp;