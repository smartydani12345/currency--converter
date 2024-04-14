#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold(`\n \t welcome to currency converter \n`));
const currency = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    JYP: 113,
    CAD: 1.30,
    AUD: 1.65,
    DIN: 40,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "JYP", "CAD", "ASD", "DIN"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "JYP", "CAD", "ASD", "DIN"]
    },
    {
        name: "amount",
        message: "Enter Your amount ",
        type: "number",
    }
]);
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;
let fromAmount = currency[userFromCurrency]; //exchange rate
let toAmount = currency[userToCurrency]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //base currency //4
let convertedAmount = baseAmount * toAmount;
console.log(chalk.green(convertedAmount.toFixed(2)));
