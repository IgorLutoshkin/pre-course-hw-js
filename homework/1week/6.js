/* Дана переменная dayOfWeek, которая содержит день недели на английском языке. Используя switch,===,=,||,if else напишите код, который выводит на экран сообщение, соответствующее дню недели:

(Если что встретилось непонятно-новенькое,к примеру || -гуглим)

Если dayOfWeek равна "Monday", "Tuesday", "Wednesday", "Thursday" или "Friday", выведите на экран сообщение "Будний день".
Если dayOfWeek равна "Saturday" или "Sunday", выведите на экран сообщение "Выходной день".
Если значение переменной dayOfWeek не соответствует ни одному из вышеперечисленных случаев, выведите на экран сообщение "Некорректное значение дня недели".
 */

const day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let input = prompt("Введите день недели на английском языке:");

//
let firstUp = input[0].toUpperCase();
let delFirstLetter = input.slice(1);
let result = firstUp + delFirstLetter.toLowerCase();
//

let dayOfWeek = day.indexOf(result);


if (dayOfWeek > 4) {
  alert("Выходной день");
} else if (dayOfWeek >= 0 && dayOfWeek <= 4) {
  alert("Будний день");
} else {
  alert("Некорректное значение дня недели");
}
