import './Calendar.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function User(){
    const [user, setUser] = useState(null);
    const [failedAuth, setFailedAuth] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (!token) {
            return setFailedAuth(true);
        }

        // Get the data from the API
        axios.get('http://localhost:8080/users/calendar', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setUser(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
                setFailedAuth(true);
            });
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setUser(null);
        setFailedAuth(true);
    };

    if (failedAuth) {
        return (
            <main className="dashboard">
                <p>You must be logged in to see this page.</p>
                <p><Link to="/login">Log in</Link></p>
            </main>
        );
    }

    if (user === null) {
        return (
            <main className="dashboard">
                <p>Loading...</p>
            </main>
        );
    }
    return(
        <div className='calendar'>
            <h2 className='calendar__title'>Welcome {user.first_name}</h2>
            <Calendar/>
            <button className="dashboard__logout" onClick={handleLogout}>
                Log out
            </button>
            <Link to='/'><button>Home</button></Link>
            <Link to='/wheel'><button>Checkin</button></Link>
        </div>
    )
}

export default User;