let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};

let passportMarried2 = {
	name:passportMarried.name,
	surname:passportMarried.surname,
	married:true,
	address:{...passportMarried.address}
};
// passportMarried2.married = passportMarried2.married;

console.log(passportMarried);
console.log(passportMarried2);
