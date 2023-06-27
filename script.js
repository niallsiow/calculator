function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let a = 0;
let b = 0;
let operator = null;

const Operations = {
    Add:        "add",
    Subtract:   "subtract",
    Multiply:   "multiply",
    Divide:     "divide"
}

function operate(a, b, operator){
    switch(operator){
        case Operations.Add:
            add(a, b);
            break;
        case Operations.Subtract:
            subtract(a, b);
            break;
        case Operations.Multiply:
            multiply(a, b);
            break;
        case Operations.Divide:
            divide(a, b);
            break;
        default:
            console.log("Invalid Operand!");
    }
}

let displayValue = null;

const display = document.querySelector('.display');

function updateDisplay(input){
    if(!displayValue){
        displayValue = input;
    }
    else{
        displayValue += input;
    }

    display.textContent = displayValue;
}

const button0 = document.querySelector('.button0');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
const button8 = document.querySelector('.button8');
const button9 = document.querySelector('.button8');

button0.addEventListener('click', () => updateDisplay('0'));
button1.addEventListener('click', () => updateDisplay('1'));
button2.addEventListener('click', () => updateDisplay('2'));
button3.addEventListener('click', () => updateDisplay('3'));
button4.addEventListener('click', () => updateDisplay('4'));
button5.addEventListener('click', () => updateDisplay('5'));
button6.addEventListener('click', () => updateDisplay('6'));
button7.addEventListener('click', () => updateDisplay('7'));
button8.addEventListener('click', () => updateDisplay('8'));
button9.addEventListener('click', () => updateDisplay('9'));