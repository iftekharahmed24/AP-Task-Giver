alert("Welcome to the Task Giver!");

let name = prompt("Enter your name:");

if(name){

document.getElementById("title").innerHTML = "Hello " + name + "!";

let tasks = [
"Read 5 pages of a book",
"Do 10 pushups",
"Drink a glass of water",
"Write one positive thought",
"Go outside for 5 minutes"
];

function showtask(){

    let randomTask = tasks[Math.floor(Math.random()*tasks.length)];

    document.getElementById("task").innerHTML = "Your task: " + randomTask;

}
showtask();

}

function completeTask(){

    alert("Great job! You completed your task 🎉");

    showtask();

}