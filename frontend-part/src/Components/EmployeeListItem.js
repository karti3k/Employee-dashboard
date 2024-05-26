import React from 'react';
import '../styles/EmployeeListItem.css';

const EmployeeListItem = ({ rank, employee }) => {
    return (
        <div className="employee-list-item">
            <div className="employee-rank">{rank}</div>
            <img src={employee.photo} alt={employee.name} className="employee-photo" />
            <div className="employee-info">
                <div className="employee-name">{employee.name}</div>
                <div className="employee-designation">{employee.designation}</div>
                <div className="employee-hours">
                    <span>{employee.hoursWorked} hrs</span>
                    <span className="employee-change">({employee.changeInHours} hrs)</span>
                </div>
            </div>
        </div>
    );
};

export default EmployeeListItem;
