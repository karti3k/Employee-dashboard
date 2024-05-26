import React, { useState, useEffect } from 'react';
import TopBar from "./Components/TopBar";
import EmployeeList from "./Components/EmployeeList";
import EmployeeCard from "./Components/EmployeeCard";
import p1 from "./assets/img/p1.png";
import p2 from "./assets/img/p2.png";
import p3 from "./assets/img/p3.png";
import p4 from "./assets/img/p4.png";
import p5 from "./assets/img/p5.png";
import p6 from "./assets/img/p6.png";
import p7 from "./assets/img/p7.png";
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
  },
  {
    id: 2,
    name: 'Ankita Thakur',
    designation: 'HR Recruiter',
    hoursWorked: 41,
    changeInHours: 0.5,
    photo: p2, 
    largePhoto: ''
},
{
  id: 3,
  name: 'Sarah Yadav',
  designation: 'Product Manager',
  hoursWorked: 40,
  changeInHours: 1.2,
  photo: p3, 
  largePhoto: ''
},{
  id: 4,
  name: 'Harsha Shivhare',
  designation: 'Designer',
  hoursWorked: 37,
  changeInHours: 1.5,
  photo: p4, 
  largePhoto: ''
},
{
  id: 5,
  name: 'Vanhi Rai',
  designation: 'Video Editor',
  hoursWorked: 37,
  changeInHours: 0.4,
  photo: p5, 
  largePhoto: ''
},
{
  id: 6,
  name: 'Bhanu Sharma',
  designation: 'Business Analyst',
  hoursWorked: 32,
  changeInHours: 0.3,
  photo: p6, 
  largePhoto: ''
},
{
  id: 7,
  name: 'Sunil Yadav',
  designation: 'Developer',
  hoursWorked: 24,
  changeInHours: 1.7,
  photo: p7, 
  largePhoto: ''
},
{
  id: 8,
  name: 'Akash Roy',
  designation: 'Business Analyst',
  hoursWorked: 21,
  changeInHours: 0.2,
  photo: p7, 
  largePhoto: ''
},
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
