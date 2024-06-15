#! /usr/bin/env node 
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    CAD: 1.3,
    JYP: 113,
    AUD: 1.65,
    DIN: 40
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currency: ",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'CAD', 'JYP', 'AUD', 'DIN']
    },
    {
        name: 'to',
        message: "Enter To Currency: ",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'CAD', 'JYP', 'AUD', 'DIN']
    },
    {
        name: 'amount',
        message: "Enter Your Amount: ",
        type: "input",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(`Converted Amount = ${convertedAmount}`);
