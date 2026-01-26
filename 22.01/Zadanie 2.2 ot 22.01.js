let correctAnswers = 0;
let wrongAnswers = 0;

if (Number(prompt("Сколько будет 2 + 2?")) === 4) correctAnswers++;
else wrongAnswers++;

if (Number(prompt("Сколько будет 2 * 2?")) === 4) correctAnswers++;
else wrongAnswers++;

if (Number(prompt("У Дени было 5 блоков. 3 съел, 1 отдал. Сколько осталось?")) === 1)
  correctAnswers++;
else wrongAnswers++;

if (Number(prompt("У Маши было 10 конфет. В итоге сколько?")) === 12)
  correctAnswers++;
else wrongAnswers++;

if (Number(prompt("Сколько будет 2 + 2 * 2?")) === 6)
  correctAnswers++;
else wrongAnswers++;

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${wrongAnswers}`);
