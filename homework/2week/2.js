/* Перепеши наше старое задание создав функцию giveMeResult(), в которую будешь передавать день недели: */
let dayOfWeek = "Monday";

if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
  dayOfWeek = "dayOff";
} else {
  dayOfWeek = "weekday";
}

switch (dayOfWeek) {
  case "weekday":
    console.log("Будний день");
    break;

  case "dayOff":
    console.log("Выходной день");
    break;
  default:
    console.log("Некорректное значение дня недели");
}
