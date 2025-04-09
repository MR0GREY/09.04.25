// Операции с логическими значениями
function showResult(text) {
    document.getElementById("result").textContent = text;
    console.log(text);
    alert(text);
  }
  
  showResult(`console.log(String(true)): ${String(true)}`);
  showResult(`console.log('a' + true): ${'a' + true}`);
  showResult(`console.log(Number(true)): ${Number(true)}`);
  showResult(`console.log(true + 1): ${true + 1}`);
  showResult(`console.log(true + true): ${true + true}`);
  showResult(`console.log(true - true): ${true - true}`);
  showResult(`console.log(String(true) + Number(true)): ${String(true) + Number(true)}`);
  