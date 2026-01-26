let clientName = "Игорь";
let totalSpent = 110;
let todaySpent = 25;

let discount = 0;

if (totalSpent >= 500) discount = 0.3;
else if (totalSpent >= 300) discount = 0.2;
else if (totalSpent >= 100) discount = 0.1;

let discountedAmount = todaySpent * (1 - discount);
totalSpent += discountedAmount;

alert(`Скидка: ${discount * 100}%`);
alert(`Итоговая сумма покупок: ${totalSpent}$`);
