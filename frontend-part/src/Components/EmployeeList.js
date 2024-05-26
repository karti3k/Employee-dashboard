import React from 'react';
import '../styles/EmployeeList.css';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = ({ employees }) => {
    return (
        <main className='employee-list'>
            <div className='employee-list-bar'>

            </div>
            {employees.map((employee, index) => (
                <EmployeeListItem 
                    key={employee.id} 
                    rank={index + 1} 
                    employee={employee} 
                />
            ))}
        </main>
    )
}
export default EmployeeList;