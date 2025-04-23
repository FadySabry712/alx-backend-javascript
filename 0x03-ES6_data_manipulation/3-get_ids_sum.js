export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (Student, curStudent) => Student.id || Student + curStudent.id,
      0,
    );
  }
  return 0;
}
