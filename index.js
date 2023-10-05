#! /usr/bin/env node
import inquirer from "inquirer";
const calculator = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter first number: ",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter second number: ",
    },
    {
        type: "list",
        name: "operator",
        message: "Select the operation you need to perform:",
        choices: ["Add", "Subtract", "Multiply", "Divide", "Modulus"],
    },
]);
let answer;
switch (calculator.operator) {
    case "Add":
        answer = calculator.num1 + calculator.num2;
        console.log("Result : " + calculator.num1 + " + " + calculator.num2 + " = " + answer);
        break;
    case "Subtract":
        answer = calculator.num1 - calculator.num2;
        console.log("Result : " + calculator.num1 + " - " + calculator.num2 + " = " + answer);
        break;
    case "Multiply":
        answer = calculator.num1 * calculator.num2;
        console.log("Result : " + calculator.num1 + " * " + calculator.num2 + " = " + answer);
        break;
    case "Divide":
        answer = calculator.num1 / calculator.num2;
        console.log("Result : " + calculator.num1 + " / " + calculator.num2 + " = " + answer);
        break;
    case "Modulus":
        answer = calculator.num1 % calculator.num2;
        console.log("Result : " + calculator.num1 + " mod " + calculator.num2 + " = " + answer);
        break;
    default:
        console.log("Please Enter Correct Operator!");
        break;
}
