let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};

let passportMarried2 = {
  ...passportMarried,
  address: { ...passportMarried.address },
};
passportMarried2.married = true;

console.log(passportMarried);
console.log(passportMarried2);
/* 
// Проверяем, что только один парень женат
let marriedCount = 0;

if (passportMarried.married) {
  marriedCount++;
}

if (passportMarried2.married) {
  marriedCount++;
}

marriedCount === 1
  ? "Все хорошо, только один парень женат"
  : "Ошибка, несколько парней женаты"; */
