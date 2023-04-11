#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const playGame = async () => {
  const numGet = Math.floor(Math.random() * 5) + 1;

  const { num1 } = await inquirer.prompt({
    name: "num1",
    type: "list",
    message: chalk.blue("Guess a number between 1 and 5"),
    choices:["1","2","3","4","5"],
  });

  const userNum = parseInt(num1);

  if (userNum === numGet) {
    console.log(chalk.bold.green("Excellent! Your answer is correct."));
  } else {
    console.log(chalk.bold.red(`Wrong! The correct answer was ${numGet}.`));
  }

  const { playAgain } = await inquirer.prompt({
    name: "playAgain",
    type: "list",
    message: "Do you want to play again?",
    choices: ["Yes", "No"],
  });

  if (playAgain === "Yes") {
    await playGame();
  } else {
    console.log(chalk.bold("Thanks for playing!"));
  }
};

playGame();
