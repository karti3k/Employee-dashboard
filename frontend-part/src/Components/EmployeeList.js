import React from 'react';
import '../styles/EmployeeList.css';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = ({ employees }) => {
    return (
        <main className='employee-list'>
            <div className='employee-list-bar'>
                <div className='rank-and-name'>
                    <h3 className='emp-rank'>Rank</h3>
                    <h3 className='emp-name'>Name</h3>
                </div>
                <div className='others'>
                    <h3 className='emp-designation'>Designation</h3>
                    <div className='hours-and-changes'>
                        <h3 className='emp-hours'>No. of hours worked</h3>
                        <h3 className='emp-changes'>Changes</h3>
                    </div>
                </div>
            </div>
            {employees.map((employee, index) => (
                <EmployeeListItem
                    key={employee.id}
                    rank={index + 1}
                    employee={employee}
                    isEven={index % 2 === 0}
                />
            ))}
        </main>
    );
}

export default EmployeeList;
