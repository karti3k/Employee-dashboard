# Employee-dashboard

The Employee-dashboard is a React.js-based web application designed to visualize and track the activity of employees within an organization. It provides an intuitive user interface for monitoring key metrics such as employee rankings, hours worked, and changes in work hours.

## Key Features:

1. **Top Bar Display:** A top bar section prominently displaying the title of the dashboard, along with the company logo and current date and time for easy reference.
   
2. **Employee List:** A structured list of employees, showcasing their rank, profile picture, name, designation, hours worked, and changes in work hours. While the initial data is hardcoded for demonstration purposes, the component is designed to dynamically render employee information from external data sources, such as APIs or databases, enabling real-time updates and seamless integration with backend systems.
   
3. **Employee of the Month:** A dedicated section highlighting the Employee of the Month, featuring their name, designation, and a larger profile picture for recognition.
   
4. **Responsive Design:** The dashboard is designed to be responsive, ensuring optimal viewing and usability across various screen sizes and devices.

## Project Structure:

- **src/components:** Contains React components for different sections of the dashboard, such as TopBar, EmployeeList, EmployeeListItem, and EmployeeCard.

- The parent component, app.js, acts as the container for other components and manages hard-coded data. It includes data for 8 employees stored in an array of objects. While this data is currently hard-coded, it can be replaced with real data fetched from a server using the Fetch API.

   
- **src/styles:** Includes CSS files for styling the components, ensuring a cohesive and visually appealing interface.
   
- **src/assets:** Stores assets such as company logos, employee profile pictures, and SVG icons used within the application.

## Why this Project?:

It's developed to understand the fundamental concepts of React.js development, including component-based architecture, state management, responsive design principles, and component reusability.
## Screenshot:

![Screenshot (792)](https://github.com/karti3k/react-project-practice/assets/97697722/903c3228-be12-4a39-908c-b5323f40e3b3)

## Steps to Run the Project Locally:

1. **Clone the Repository:**  
   Clone this repository to your local machine using the following command (using git bash if on windows): `git clone https://github.com/karti3k/Employee-dashboard.git`
2. **Navigate to the Project Directory:**
   Open a terminal and navigate to the frontend-part directory inside the cloned repository: `cd Employee-dashboard/frontend-part`
3. **Install Dependencies:**
Make sure Node.js is installed on your machine (important). Then, install the project dependencies (this is optional) using npm: `npm install`
4. **Start the Development Server:**
Once the dependencies are installed, start the development server by running (assuming above steps are successfully executed and you are inside frontend-part folder: `npm start
`
5. **View the Application:**
Open your web browser and navigate to http://localhost:3000 to view the application.


