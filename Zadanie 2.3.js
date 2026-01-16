let a = Number(prompt("Уровень 3: Введите первое число"));
let b = Number(prompt("Введите второе число"));
let c = Number(prompt("Введите третье число"));

if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  alert(`Наибольшее число: ${max}`);
} else {
  alert("Ошибка: нужно ввести числа");
}
