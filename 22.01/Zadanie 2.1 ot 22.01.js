const EXISTING_LOGIN = "the_best_user";
const EXISTING_PASSWORD = "12345678";

const userLogin = prompt("Введите логин").trim();
const userPassword = prompt("Введите пароль").trim();

if (userLogin === EXISTING_LOGIN && userPassword === EXISTING_PASSWORD) {
  alert(`Добро пожаловать, ${userLogin}!`);
} else {
  alert("Логин и (или) Пароль введены неверно");
}
