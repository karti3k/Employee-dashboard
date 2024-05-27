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

        return () => clearInterval(timer); // Cleanup interval on component unmount ensure that the interval is properly cleared when the component unmounts or before the effect is re-executed if its dependencies change.
    }, []);

    // Function to format the date
    const formatDate = (date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return date.toLocaleDateString('en-US', options);
    };

    // Function to format the time
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
            <section className='logo-and-heading'>
                <span>
                    <img src={companylogo} alt="Company Logo" /> {/* Displaying company logo */}
                </span>
                <span>
                    <h1>Employees Activity Dashboard</h1> {/* Displaying dashboard title */}
                </span>
            </section>
            <section className='date-time'>
                <div className='date'>{formatDate(currentDateTime)}</div>
                <div className='time'>{formatTime(currentDateTime)}</div>
            </section>
        </header>
    );
};

export default TopBar;
