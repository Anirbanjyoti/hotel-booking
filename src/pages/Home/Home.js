import React from 'react';
import slider1 from '../../images/slider1.jpg'
import Login from '../Login/Login';
import './Home.css'

const Home = () => {
    // const today = new.date();
    // const year = today.date();
    return (
        <div>
        <div className="registration mt-5 px-5">
            <div className='logForm p-5 b-1'>
            <h2>Please Login To Book Cheapest Hotel Room!</h2>
                <Login></Login>
            </div>
            <div>
                <img className='coverImg' style={{width:'750px', height:'500px'}} src={slider1} alt='img' />
            </div>
        </div>
        <div className="footer p-4 text-center" style={{fontSize:"20px"}}>
            Copyright International Hotel@ 2022
        </div>
        </div>
    );
};

export default Home;