import React from 'react';
import '../styles/EmployeeListItem.css';
import CarretUpIcon from '../assets/img/caret-up-fill.svg';
import CarretDownIcon from '../assets/img/caret-down-fill.svg';
import r1 from '../assets/img/r1.png';
import r2 from '../assets/img/r2.png';
import r3 from '../assets/img/r3.png';

const EmployeeListItem = ({ rank, employee, isEven }) => {
    const getRankIcon = () => {
        if (rank === 1) {
            return <img src={r1} alt="Rank 1" className="rank-icon" />;
        } else if (rank === 2) {
            return <img src={r2} alt="Rank 2" className="rank-icon" />;
        } else if (rank === 3) {
            return <img src={r3} alt="Rank 3" className="rank-icon" />;
        } else {
            return null; // No icon for other ranks
        }
    };

    return (
        <div className={`employee-list-item ${isEven ? 'even' : 'odd'}`}>
            <div className='rank-icon-pos'>{getRankIcon()}</div>
            <div className='ran-and-nam'>
                <div className='employee-rank'>{rank}</div>
                <span className='pic-and-name'>
                    <img src={employee.photo} alt={employee.name} className="employee-photo" />
                    <div className="employee-name">{employee.name}</div>
                </span>
            </div>
            <div className='other-data'>
                <div className="employee-designation">{employee.designation}</div>
                <div className="employee-hours-change">
                    <span className='employee-hours'>7({employee.hoursWorked})</span>
                    <span className="employee-change">
                        {employee.changeInHours > 0.5 ? (
                            <>
                                <img src={CarretUpIcon} alt="Carret Up" className='caret-up-green' />
                                {employee.changeInHours} hrs
                            </>
                        ) : (
                            <>
                                <img src={CarretDownIcon} alt="Carret Down" className='caret-down-red' />
                                {employee.changeInHours} hrs
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EmployeeListItem;
