const tasks = [ 
	{ id: 1, title: "HTML&CSS", isDone: true }, 
	{ id: 2, title: "JS", isDone: true }, 
	{ id: 3, title: "ReactJS", isDone: false } 
] 
console.log([...tasks,{id: 4, title: "Next", isDone: false }]);


