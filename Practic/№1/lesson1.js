// Функция для вывода результата
function showResult(text) {
  document.getElementById("result").textContent = text;
  console.log(text);
  alert(text);
}

// Запрос возраста пользователя
let age = prompt("Ваш возраст: ");
showResult(`Вам ${age} лет`);

// Запрос имени пользователя
let name = prompt("Введите ваше имя: ");
showResult(`Добро пожаловать на сайт, ${name}`);
