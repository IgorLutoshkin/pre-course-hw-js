const tasks = [
  { id: 1, title: "HTML&CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "ReactJS", isDone: false },
];

console.log(
  tasks.map((i) =>
    i.title === "JS" ? { ...i, title: "I like JS" } : i
  )
);
/* В этом коде map метод используется для создания нового массива, в котором для объекта со title свойством, равным "JS", его title свойство обновлено до "Мне нравится JS". Синтаксис spread { ...i } используется для создания мелкой копии каждого объекта, что позволяет изменять title свойство, сохраняя при этом другие свойства нетронутыми. */