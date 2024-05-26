import React, { useState, useEffect } from 'react';
import '../styles/TopBar.css';
import companylogo from '../assets/img/company-logo.png';

const TopBar = () => {

// Logic for setting up current date and time STARTs here
    const [currentDateTime, setCurrentDateTime] = useState(new Date()); // defining use state variables for setting up current date and time

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    const formatDate = (date) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en-US', options);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };
// Logic for setting up current date and time ENDs here

    return (
        <header className='top-bar'>
            <div className='logo-and-heading'>
                <span>
                    <img src={companylogo} alt="Company Logo"/>
                </span>
                <span>
                    <h1>Employees Activity Dashboard</h1>
                </span>
            </div>
            <div className='date-time'>
                <div className='date'>{formatDate(currentDateTime)}</div>
                <div className='time'>{formatTime(currentDateTime)}</div>
            </div>
        </header>
    );
};

export default TopBar;
