import React from 'react';
import eomicon from '../assets/img/eom_ico.png';
import '../styles/EmployeeCard.css';

// The EmployeeCard component expects to receive an 'employee' prop which contains the data of an employee to be displayed as the employee of the month
const EmployeeCard = ({ employee }) => {

    if (!employee) return null;// If no employee data is provided, return null to prevent errors and unnecessary rendering

    return (
        <aside className="employee-card">
            {/* Employee's large photo */}
            <img className='emp-img' src={employee.largePhoto} alt={employee.name} />

            <div>
                <h2>Employee of the Month</h2> {/* Heading for the card */}
                <h3>{employee.name}</h3> {/* Employee's name */}
                <p>{employee.designation}</p> {/* Employee's designation */}
            </div>
            
            {/* Decorative Icon for Employee of the Month */}
            <img className='eom-icon' src={eomicon}></img>
        </aside>
    );
};

export default EmployeeCard;
