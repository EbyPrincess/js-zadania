let num1 = Number(prompt("Уровень 1: Введите число"));

if (num1 > 0) {
  alert("Число положительное");
} else if (num1 < 0) {
  alert("Число отрицательное");
} else if (num1 === 0) {
  alert("Число равно нулю");
} else {
  alert("Это не число");
}