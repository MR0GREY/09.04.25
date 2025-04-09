// Функция для вывода результата
function showResult(text) {
    document.getElementById("result").textContent = text;
    console.log(text);
    alert(text);
  }
  
  // 1. Условный оператор
  let number = prompt("Введите число:");
  
  if (number > 5) {
    showResult("Число больше 5");
  } else if (number < 5) {
    showResult("Число меньше 5");
  } else {
    showResult("Число равно 5");
  }
  
  // 2. Проверка равенства переменных
  let test1 = 10, test2 = 10;
  if (test1 === test2) {
    showResult("Переменные test1 и test2 равны.");
  } else {
    showResult("Переменные test1 и test2 не равны.");
  }
  
  // 3. Ввод двух чисел
  let num1 = prompt("Введите первое число:");
  let num2 = prompt("Введите второе число:");
  
  let minNum = num1 < num2 ? num1 : num2;
  showResult(`Минимальное число: ${minNum}`);
  
  // 4. Проверка числа
  let num = prompt("Введите число от 1 до 15:");
  if (num > 0 && num < 15) {
    showResult("Число больше 0 и меньше 15");
  } else {
    showResult("Число не в пределах от 0 до 15");
  }
  