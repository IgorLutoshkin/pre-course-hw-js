let passport = {
  name: "Petr",
  surname: "Petrov",
};

// создание копии объекта passport
let passport2 = { ...passport };

// изменение имени в копии объекта
passport2.name = "Ivan";

// вывод в консоль исходного объекта и его копии
console.log(passport.name);
console.log(passport2.name);