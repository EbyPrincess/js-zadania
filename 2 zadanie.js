let input = prompt("Введите число:");

if (!isNaN(input) && input !== "") {
  let number = Number(input);

  if (number % 2 === 0) {
    alert("Число чётное");
  } else {
    alert("Число нечётное");
  }
} else {
  alert("Это не число");
}
