import React from 'react';
import '../styles/EmployeeList.css';
import EmployeeListItem from './EmployeeListItem';

// destructuring the props object that is passed to the EmployeeList component to directly extract the employees property. This allows us to access employees directly within the component without needing to reference props.employees.
const EmployeeList = ({ employees }) => {

    return (
        <main className='employee-list'>

            {/* Header bar for the employee list */}
            <section className='employee-list-bar'>
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
            </section>

            {/* Mapping through the employees array and rendering an EmployeeListItem for each employee */}
            {employees.map((employee, index) => (
                <EmployeeListItem
                    key={employee.id}
                    rank={index + 1}
                    employee={employee} // Passing the employee data to the EmployeeListItem component
                    isEven={index % 2 === 0} // Determines if the index is even or odd for styling purposes
                />
            ))}
        </main>
    );
}

export default EmployeeList;
