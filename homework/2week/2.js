/* Перепеши наше старое задание создав функцию giveMeResult(), в которую будешь передавать день недели: */

const giveMeResult = (day) => {
  let dayOfWeek;

  switch (day) {
    case "Saturday":
    case "Sunday":
      dayOfWeek = "dayOff";
      break;
    default:
      dayOfWeek = "weekday";
      break;
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
      break;
  }
};

giveMeResult("Saturday");
