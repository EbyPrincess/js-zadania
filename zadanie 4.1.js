const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

function giveParcel() {
  const name = peopleWaiting.shift();
  alert(
    `${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`,
  );
}

function leaveQueueWithoutParcel() {
  const name = peopleWaiting.pop();
  alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);
}

giveParcel();
giveParcel();

giveParcel();

while (peopleWaiting.length > 0) {
  leaveQueueWithoutParcel();
}
