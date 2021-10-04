const prompt = require("prompt-sync")({ sigint: true });

let toDo = [];
let completed = ["[complete]", "[incomplete]"];
let status = [];

console.log("Welcome to the To-Do List Manager Application!");

function getToDoList() {
	if (toDo.length === 0) {
		console.log("Your to-do list is empty.\n");
	} else {
		console.log("You have", toDo.length, "to-do item(s).\n");

		for (let i = 0; i < toDo.length; i++) {
			console.log(i + 1 + ". " + status[i], toDo[i]);
		}

		console.log("");
	}
}

function chooseOptions(s) {
	if (s !== "1" || s !== "2") {
	} else if (s === "1") {
		console.log("\n~ Creating a new to-do item ~");
		console.log("What is this to-do item called?");
		s = prompt("> ");
		status.push(completed[1]);
		toDo.push(s);
	} else {
		console.log("\n~ Completing a to-do item ~");
		console.log("Which to-do item would you like to complete or uncomplete?");
		s = prompt("> ");

		if (status[s - 1] === "[complete]") {
			status[s - 1] = completed[1];
		} else {
			status[s - 1] = completed[0];
		}
	}
}

while (true) {
	console.log("\n==============================================\n");

	getToDoList();

	console.log("~ Select an action ~");
	console.log("[1] Create a to-do item");
	console.log("[2] Complete or Uncomplete a to-do item");

	let select = prompt("> ");

	chooseOptions(select);
}
