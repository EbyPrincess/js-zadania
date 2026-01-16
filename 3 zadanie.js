let name = prompt("Введите ваше имя:");
let age = Number(prompt("Введите ваш возраст:"));

if (age < 18) {
  alert(`Привет, ${name}! Ты ещё школьник.`);
} else if (age >= 18 && age <= 65) {
  alert(`Привет, ${name}! Ты взрослый человек, заходи.`);
} else if (age > 65) {
  alert(`Привет, ${name}! Для возрастных лиц у нас скидки.`);
} else {
  alert("Некорректный возраст");
}
