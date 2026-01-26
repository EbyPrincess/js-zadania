function checkQuestionAnswer(question, correctAnswer) {
  const userAnswer = prompt(question).trim().toLowerCase();
  const correct = correctAnswer.trim().toLowerCase();

  alert(userAnswer === correct ? "Ответ верный" : "Ответ неверный");
}

checkQuestionAnswer("Сколько будет 2 + 2?", "4");
checkQuestionAnswer("Столица России?", "Москва");
checkQuestionAnswer("Какой язык мы изучаем?", "JavaScript");
