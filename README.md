# Classroom Average Web App
This is a simple web application for managing student data and calculating the classroom average.

URL to web page: https://pujaroy280.github.io/ClassroomAverage/


<h3 align="center">Classroom Average Database Management System</h3>
The purpose of this assignment is to build a basic web application for managing student grades. I used JavaScript to create, display, and update student data within an HTML table. Additionally, the application calculates and displays the classroom's average grade.

![image](https://github.com/pujaroy280/ClassroomAverage/assets/62675121/29f35f64-7342-498f-aa13-bde2675af712)

## Project Structure

- **index.html**: HTML file for displaying student data and classroom averages.
- **styles.css**: CSS file for styling HTML elements.
- **studentData.js**: Module to store an array of student information.
- **calculateClassroomAverage.js**: Module for calculating the classroom average grade.
- **studentTable.js**: Module for creating and updating the student table.
- **main.js**: Main application logic.

## Data Setup

In `studentData.js`, you can find an array of sample student objects with properties such as `id`, `name`, `address`, and `averageGrade`.

## Build the Student Table

In `studentTable.js`, the `renderStudentTable` function dynamically creates table rows to display each student's information. The `updateGrade` function updates a student's grade and recalculates the classroom average.

## Calculate Classroom Average

In `calculateClassroomAverage.js`, the `calculateClassroomAverage` function takes the student data as a parameter and calculates the average grade.

## Main Application Logic

In `main.js`, the application logic includes rendering the initial student table, calculating and displaying the initial classroom average, and setting up an event listener for changes in student grades.

## Styling

CSS styles in `styles.css` are applied to make the student table and classroom average visually appealing.

## Testing

Test the web application to ensure correct functionality, including adding and modifying student grades and updating the classroom average accordingly.

## How to Run

Simply open the `index.html` file in a web browser.

```bash
// Run the project using the Node Package Manager 
$ npm run start

