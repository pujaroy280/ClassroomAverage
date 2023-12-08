// import { studentData } from "./studentData.js";

function calculateClassroomAverage(studentData) {
  const totalGrades = studentData.reduce(
    (acc, student) => acc + student.averageGrade,
    0
  );
  const classroomAverage = totalGrades / studentData.length;
  return classroomAverage;
}

export default calculateClassroomAverage;
