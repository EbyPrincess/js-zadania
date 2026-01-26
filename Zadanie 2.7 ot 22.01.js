const name = prompt("Введите имя клиента").trim();
const today = Number(prompt("Сколько клиент потратил сегодня?"));
const total = Number(prompt("Сколько клиент потратил за все время?"));

if (isNaN(today) || isNaN(total)) {
  alert("Ошибка: введены некорректные данные");
} else {
  let discount = 0;

  if (total >= 500) discount = 0.3;
  else if (total >= 300) discount = 0.2;
  else if (total >= 100) discount = 0.1;

  const finalSum = total + today * (1 - discount);
  alert(`Клиент ${name}, итоговая сумма покупок: ${finalSum}$`);
}
