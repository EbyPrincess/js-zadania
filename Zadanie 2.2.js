let input = prompt("Уровень 2: Введите строку");

if (!isNaN(input) && input !== "") {
  let num2 = Number(input);

  if (num2 > 100) {
    alert("Число больше 100");
  } else if (num2 < 100) {
    alert("Число меньше 100");
  } else {
    alert("Число равно 100");
  }
} else {
  alert("Введено не число");
}
