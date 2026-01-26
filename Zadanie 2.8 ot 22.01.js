const password = prompt("Введите пароль");

const isValidLength = password.length >= 3 && password.length <= 20;
const hasUpperCase = /[A-Z]/.test(password);
const hasDigit = /\d/.test(password);

if (isValidLength && hasUpperCase && hasDigit) {
  alert("Пароль валиден. Добро пожаловать в аккаунт");
} else {
  alert("Пароль не удовлетворяет условиям!");
}
