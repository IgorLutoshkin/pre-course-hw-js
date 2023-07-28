/* Перепеши наше старое задание создав функцию giveMeResult(), в которую будешь передавать день недели: */

const giveMeResult = (day) => {
  const dayOfWeek =
    day === "Saturday" || day === "Sunday" ? "dayOff" : "weekday";

  // нужно добавить проверку на "Некорректное значение дня недели"
  // скорее всего переписать на конструкцию if-else или через массив
  switch (dayOfWeek) {
    case "weekday":
      console.log("Будний день");
      break;

    case "dayOff":
      console.log("Выходной день");
      break;
    default:
      console.log("Некорректное значение дня недели");
      break;
  }
};

giveMeResult("Saturday");
