let userText = prompt("Введите текст").trim();
let wordFromText = prompt("Введите слово из текста").trim();

let indexOfWord = userText.indexOf(wordFromText);

let resultText = userText.slice(0, indexOfWord);

alert(`Результат: ${resultText}`);
