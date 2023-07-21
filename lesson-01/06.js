let str = "zzzzyzz";
console.log(str.split("").includes("y") ? "нашел" : "заблудился");
// str.split("") создаю массив
// .includes("y") этот метод позволяет пройтись по массиву в поиске нужного элемента и возвращает true