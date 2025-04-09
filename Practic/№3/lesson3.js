// Функция для вывода результата
function showResult(text) {
    document.getElementById("result").textContent = text;
    console.log(text);
    alert(text);
  }
  
  // 1. Ошибка в коде (переменная test не определена)
  let test;
  showResult(`Результат: ${test}`); // undefined
  
  // 2. Операции с числами
  let a = '2', b = '3';
  showResult(`Сумма переменных a и b: ${+a + +b}`);
  
  // 3. Ввод двух чисел с клавиатуры и вывод операций
  let num1 = prompt("Введите первое число:");
  let num2 = prompt("Введите второе число:");
  
  let sum = +num1 + +num2;
  let diff = num1 - num2;
  let product = num1 * num2;
  let quotient = num1 / num2;
  let remainder = num1 % num2;
  
  showResult(`Сумма чисел: ${sum}`);
  showResult(`Разность чисел: ${diff}`);
  showResult(`Произведение чисел: ${product}`);
  showResult(`Частное чисел: ${quotient}`);
  showResult(`Остаток от деления чисел: ${remainder}`);
  