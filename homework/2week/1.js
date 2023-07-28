/* ​Напишите функцию isPositive, которая принимает один аргумент - число, и возвращает true, если число положительное, и false в противном случае. Используйте условный оператор if и стрелочную функцию */

const isPositive = (n) => {
	if (n>=0) {
		return true
	} else {
		return false
	}
}

console.log(isPositive(-1));