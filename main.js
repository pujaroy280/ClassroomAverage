// Execute the following code when the DOM content has been fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get a reference to the HTML table with the id "student-table"
  const table = document.getElementById("student-table");
  // Get a reference to the table body within the table
  const tbody = table.querySelector("tbody");

  // Function to render the student table with data
  function renderStudentTable(data) {
    // Clear the existing content in the table body
    tbody.innerHTML = "";

    // Iterate through each student in the data array
    for (const student of data) {
      // Create a new table row (tr) for each student
      const tr = document.createElement("tr");
      // Set the inner HTML of the row with student information
      tr.innerHTML = `
              <td>${student.id}</td>
              <td>${student.name}</td>
              <td>${student.address}</td>
              <td><input type="number" value="${student.averageGrade}" onchange="updateGrade(this)"></td>
          `;
      // Append the row to the table body
      tbody.appendChild(tr);
    }
  }

  // Function to update a student's grade
  function updateGrade(inputElement) {
    // Extract the student ID from the first cell of the same row
    const studentId = parseInt(
      inputElement.closest("tr").querySelector("td:first-child").innerText,
      10
    );
    // Get the new grade from the input element
    const newGrade = parseInt(inputElement.value, 10);

    // Find the corresponding student in the data array
    const student = studentData.find((student) => student.id === studentId);
    // Update the student's average grade
    student.averageGrade = newGrade;

    // Recalculate the classroom average and update the display
    const classroomAverage = calculateClassroomAverage(studentData);
    updateClassroomAverageDisplay(classroomAverage);
  }

  // Function to update the display of the classroom average
  function updateClassroomAverageDisplay(average) {
    // Get a reference to the HTML element with the id "classroom-average"
    const averageDisplay = document.querySelector("#classroom-average");
    // Set the text content to display the classroom average with two decimal places
    averageDisplay.textContent = `Classroom Average: ${average.toFixed(2)}`;
  }

  // Array of student data objects
  const studentData = [
    // Student data of objects in an array
    {
      id: 1,
      name: "Alice",
      address: "123 Main Street",
      averageGrade: 85,
    },
    {
      id: 2,
      name: "Bob",
      address: "456 Elm Street",
      averageGrade: 78,
    },
    {
      id: 3,
      name: "Charlie",
      address: "789 Oak Street",
      averageGrade: 92,
    },
    {
      id: 4,
      name: "David",
      address: "321 Pine Street",
      averageGrade: 70,
    },
    {
      id: 5,
      name: "Mary",
      address: "456 Madison Street",
      averageGrade: 95,
    },
    {
      id: 6,
      name: "Nancy",
      address: "1111 West World Street",
      averageGrade: 98,
    },
    {
      id: 7,
      name: "Julie",
      address: "77 Jewel Street",
      averageGrade: 65,
    },
    {
      id: 8,
      name: "Annie",
      address: "888 Canal Street",
      averageGrade: 83,
    },
    {
      id: 9,
      name: "Peter",
      address: "981 Metcalf Street",
      averageGrade: 93,
    },
    {
      id: 10,
      name: "Tina",
      address: "1099 Boulevard Street",
      averageGrade: 80,
    },
  ];

  // Function to calculate the classroom average
  function calculateClassroomAverage(studentData) {
    // Calculate the total of all student average grades using reduce
    const totalGrades = studentData.reduce(
      (acc, student) => acc + student.averageGrade,
      0
    );
    // Calculate the classroom average
    const classroomAverage = totalGrades / studentData.length;
    // Return the calculated average
    return classroomAverage;
  }

  // Render the initial student table
  renderStudentTable(studentData);

  // Calculate and display the initial classroom average
  const initialClassroomAverage = calculateClassroomAverage(studentData);
  updateClassroomAverageDisplay(initialClassroomAverage);

  // Add an event listener for the "input" event on the table
  table.addEventListener("input", (event) => {
    // Check if the target element is an input
    if (event.target.tagName === "INPUT") {
      // Call the updateGrade function when the input changes
      updateGrade(event.target);
    }
  });
});
