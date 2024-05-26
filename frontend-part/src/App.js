import React, { useState, useEffect } from 'react';
import TopBar from "./Components/TopBar";
import EmployeeList from "./Components/EmployeeList";
import EmployeeCard from "./Components/EmployeeCard";
import p1 from "./assets/img/p1.png";
import largep1 from "./assets/img/largep1.jpg";
import './App.css';

const employeeData = [
  {
      id: 1,
      name: 'Rakesh Sharma',
      designation: 'UI/UX Designer',
      hoursWorked: 42,
      changeInHours: 1.5,
      photo: p1, 
      largePhoto: largep1
  }
];

function App() {
  const [employees, setEmployees] = useState([]);
    const [topEmployee, setTopEmployee] = useState(null);

    useEffect(() => {
        setEmployees(employeeData);
        setTopEmployee(employeeData[0]); // Assuming the first employee is the top employee
    }, []);

  return (
    <div className="App">
      <TopBar />
      <div className="main-content">
      <EmployeeList employees={employees}/>
      {topEmployee && <EmployeeCard employee={topEmployee} />}
      {/* the check topEmployee && <EmployeeCard employee={topEmployee} /> ensures that the EmployeeCard component is only rendered if topEmployee is not null or undefined */}
      </div>
    </div>
  );
}

export default App;
