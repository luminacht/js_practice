/* Question 1 */

let userInput = window.prompt("Input Number: ");

if (userInput >= 90 && (userInput <= 110)) {
    window.alert("Bingo!");
} else {
    window.alert("Miss!");
}


/* Question 2 */

{
let userInput = window.prompt("Input Number: ");

window.alert(userInput >= 90 && userInput <= 110 ? "Bingo!" : "Miss!");
}


/* Question 3 */

let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (+, -, * or /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);