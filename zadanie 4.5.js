const clientsEstimations = [];

function askClientToGiveEstimation() {
  const estimation = Number(
    prompt("Как вы оцениваете нашу кофейню от 1 до 10?"),
  );

  if (estimation >= 1 && estimation <= 10) {
    clientsEstimations.push(estimation);
  }
}

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter((e) => e > 5);
const notGoodEstimations = clientsEstimations.filter((e) => e <= 5);

alert(`
Всего оценок: ${clientsEstimations.length}
Положительных оценок: ${goodEstimations.length}
Отрицательных оценок: ${notGoodEstimations.length}
`);
