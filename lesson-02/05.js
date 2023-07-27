let passport = {
  name: "Petr",
  surname: "Petrov",
};

// создание копии объекта passport
let passportCopy = Object.assign({}, passport);

// изменение имени в копии объекта
passportCopy.name = "Ivan";

// вывод в консоль исходного объекта и его копии
console.log(passport);
console.log(passportCopy);
