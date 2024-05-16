# 🏢 Employee Management Dashboard

<!-- Intro  -->
<h3 align="center">
  <samp>&gt; Welcome to the Employee Management Dashboard!</samp>
</h3>

<p align="center"> 
  <samp>
    <br>
    「 A comprehensive application to manage employee data efficiently. 」
    <br>
    <br>
  </samp>
</p>

<p align="center">
 <a href="https://linkedin.com/in/ericivara" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
 </a>
 <a href="https://twitter.com/ericivara" target="_blank">
  <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
 </a>
</p>

## Table of Contents
1. [Features](#-features)
2. [Demo](#-demo)
3. [Technologies Used](#-technologies-used)
4. [Installation](#-installation)
5. [Running the Application](#-running-the-application)
6. [Usage](#-usage)
7. [Code Overview](#-code-overview)
8. [Acknowledgments](#-acknowledgments)
9. [License](#-license)

## ✨ Features

- **Employee Management:** Add, view, and clear employee records.
- **Interactive Dashboard:** Overview of total departments and employees.
- **User-Friendly Interface:** Simple navigation with Sidebar and Navbar components.
- **Persistent Data:** Employee data is saved in local storage and initialized on app load.

## 🖼️ Demo

Here's a short video of the app in action:

https://github.com/EricIVara/employee-management-system/assets/79364739/b6ec43dd-3a81-4363-afed-8608a06a3aa6

## 🛠️ Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🚀 Installation

To run this application locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/employee-management-dashboard.git
    cd employee-management-dashboard
    ```

2. **Install the required packages:**
    ```sh
    npm install
    ```

## 🏃‍♂️ Running the Application

1. **Start the development server:**
    ```sh
    npm start
    ```

2. **Open the app:** Navigate to `http://localhost:3000` in your web browser to access the application.

## 🎮 Usage

1. **Navigate the Dashboard:** Use the sidebar to access different sections of the app.
2. **Add a New Employee:** Go to the 'Manage Employees' section and fill out the form to add a new employee.
3. **View Employees:** The 'Manage Employees' section displays all the added employees.

## 📂 Code Overview

### `App.js`

- **Description:** Main component that sets up routing and includes Navbar and Sidebar.
- **Key Functions:** Initializes employee data from local storage and sets up routes for the dashboard and employee management.

### `Navbar.js`

- **Description:** Provides the top navigation bar with user information and logout functionality.
- **Key Functions:** `toggleDropdown` to manage the visibility of the user dropdown menu.

### `Sidebar.js`

- **Description:** Provides a sidebar with navigation links.
- **Key Functions:** Renders navigation links to different sections of the app.

### `Dashboard.js`

- **Description:** Displays key statistics about the departments and employees.
- **Key Functions:** Renders tiles with department and employee counts.

### `EmployeeForm.js`

- **Description:** Allows adding and clearing employee records.
- **Key Functions:** `handleSubmit` to add a new employee, `clearEmployees` to remove all employee records.

### `Cards.js`

- **Description:** Displays employee information in card format.
- **Key Functions:** Maps through employee data and renders individual cards.

### `store.js`

- **Description:** Configures the Redux store with the employee reducer.
- **Key Functions:** Sets up the store with employee management state.

### `employeeSlice.js`

- **Description:** Defines the employee slice with actions and reducers for managing employee data.
- **Key Functions:** `addEmployee`, `clearEmployees`, and `initializeEmployees` actions to manage the employee state.

### `index.js`

- **Description:** Entry point of the application that sets up the Redux provider and renders the App component.
- **Key Functions:** Wraps the App component with the Redux Provider.

## 🙏 Acknowledgments

- **React & Redux:** For providing a robust framework for building interactive UIs.
- **React Router:** For enabling seamless navigation within the app.
- **CSS:** For styling the application components.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
