import React from 'react';
import eomicon from '../assets/img/eom_ico.png';
import '../styles/EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
    if (!employee) return null;

    return (
        <aside className="employee-card">
            <img className='emp-img' src={employee.largePhoto} alt={employee.name} />
            <div>
            <h2>Employee of the Month</h2>
            <h3>{employee.name}</h3>
            <p>{employee.designation}</p>
            </div>
            <img className='eom-icon' src={eomicon}></img>
        </aside>
    );
};

export default EmployeeCard;
