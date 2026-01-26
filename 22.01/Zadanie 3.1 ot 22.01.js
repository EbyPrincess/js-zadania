function getName1(name) {
  return `Имя равно ${name}`;
}

const getName2 = function (name) {
  return `Имя равно ${name}`;
};

const getName3 = (name) => `Имя равно ${name}`;

console.log(getName1("Вадим"));
console.log(getName2("Вадим"));
console.log(getName3("Вадим"));
