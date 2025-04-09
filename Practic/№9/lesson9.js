// Получаем элемент для вывода результата на страницу
const output = document.getElementById("result");

// Функция для вывода результатов в элемент и в консоль
function showResult(text) {
  const div = document.createElement("div");
  div.className = "result";
  div.textContent = text;
  output.appendChild(div);
  console.log(text); // Также выводим в консоль
  alert(text); // Выводим с помощью alert
}

// Запрашиваем число у пользователя
let num = Number(prompt("Введите число:"));

// Вычисляем количество сотен, десятков и единиц
let hundreds = Math.floor(num / 100); // количество сотен
let tens = Math.floor((num % 100) / 10); // количество десятков
let ones = num % 10; // количество единиц

// Формируем строку с результатом
let result = `В числе ${num} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${ones}`;

// Выводим результат
showResult(result);

/* 
Комментарий:
1. Введенное число проверяется с помощью операции остатка от деления (%).
2. Для получения количества сотен используется целочисленное деление.
3. Результаты выводятся на страницу, в консоль и через alert.
*/
