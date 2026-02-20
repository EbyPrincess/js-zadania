function giveJobToStudent(student, jobName) {
  alert(
    `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`
  );

  return {
    ...student,
    job: jobName,
  };
}


const student4 = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
};

const updatedStudent = giveJobToStudent(student4, 'веб-разработчик');
console.log(updatedStudent);