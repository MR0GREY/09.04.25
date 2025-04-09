// Операции с остатком от деления
function showResult(text) {
    document.getElementById("result").textContent = text;
    console.log(text);
    alert(text);
  }
  
  // 1. Остаток от деления
  let a = 13, b = 5;
  showResult(`Остаток от деления ${a} на ${b} равен: ${a % b}`);
  
  // 2. alert(a) (переменная не определена)
  let a;
  showResult(`Результат: ${a}`); // undefined
  
  // 3. alert('abc' * 3)
  showResult(`Результат умножения 'abc' на 3: ${'abc' * 3}`); // NaN
  
  // 4. alert(1 / 0) и alert(-1 / 0)
  showResult(`1 / 0: ${1 / 0}`);
  showResult(`-1 / 0: ${-1 / 0}`);
  
  // 5. alert('2' * '3')
  showResult(`Результат умножения '2' и '3': ${'2' * '3'}`);
  