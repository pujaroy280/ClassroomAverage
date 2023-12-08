import studentData from "./studentData.js";
import calculateClassroomAverage from "./calculateClassroomAverage.js";

function renderStudentTable(table, data) {
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  for (const student of data) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.address}</td>
            <td><input type="number" value="${student.averageGrade}" onchange="updateGrade(this)"></td>
        `;
    tbody.appendChild(tr);
  }
}

function updateGrade(inputElement) {
  const studentId = parseInt(
    inputElement.closest("tr").querySelector("td:first-child").innerText,
    10
  );
  const newGrade = parseInt(inputElement.value, 10);

  const student = studentData.find((student) => student.id === studentId);
  student.averageGrade = newGrade;

  const classroomAverage = calculateClassroomAverage(studentData);
  updateClassroomAverageDisplay(classroomAverage);
}

function updateClassroomAverageDisplay(average) {
  const averageDisplay = document.querySelector("#classroom-average");
  averageDisplay.textContent = `Classroom Average: ${average.toFixed(2)}`;
}

export { renderStudentTable, updateGrade, updateClassroomAverageDisplay };
