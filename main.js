const prompt = require("prompt-sync")({ sigint: true });

let toDo = [];
let completed = ["[complete]", "[incomplete]"];
let status = [];

console.log("Welcome to the To-Do List Manager Application!");

while (true) {
	console.log("\n==============================================\n");

	if (toDo.length === 0) {
		console.log("Your to-do list is empty.\n");
	} else {
		console.log("You have", toDo.length, "to-do item(s).\n");

		for (let i = 0; i < toDo.length; i++) {
			console.log(i + 1 + ". " + status[i], toDo[i]);
		}

		console.log("");
	}

	console.log("~ Select an action ~");
	console.log("[1] Create a to-do item");
	console.log("[2] Complete a to-do item");

	let select = prompt("> ");

	if (select === "1") {
		console.log("\n~ Creating a new to-do item ~");
		console.log("What is this to-do item called?");
		select = prompt("> ");
		status.push(completed[1]);
		toDo.push(select);
	} else {
		console.log("\n~ Completing a to-do item ~");
		console.log("Which to-do item would you like to complete?");
		select = prompt("> ");
		status[select - 1] = completed[0];
	}
}
