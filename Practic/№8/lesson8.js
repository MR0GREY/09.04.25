let day = prompt("Введите день месяца (1-31):");

if (day >= 1 && day <= 10) {
  alert("Число попадает в первую декаду месяца.");
} else if (day >= 11 && day <= 20) {
  alert("Число попадает в вторую декаду месяца.");
} else if (day >= 21 && day <= 31) {
  alert("Число попадает в третью декаду месяца.");
} else {
  alert("Некорректный день");
}
