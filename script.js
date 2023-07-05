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

let storedVal = 0;
let operator = null;

const Operations = {
    Add:        "add",
    Subtract:   "subtract",
    Multiply:   "multiply",
    Divide:     "divide"
}

function operate(a, b, op){
    switch(op){
        case Operations.Add:
            return add(a, b);
        case Operations.Subtract:
            return subtract(a, b);
        case Operations.Multiply:
            return multiply(a, b);
        case Operations.Divide:
            return divide(a, b);
        default:
            console.log("Invalid Operator!");
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
const button9 = document.querySelector('.button9');

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

function storeDisplayValue(){
    if(displayValue){
        storedVal = displayValue;
        displayValue = null;
    }
}

const buttonAdd = document.querySelector('.buttonAdd');
const buttonSubtract = document.querySelector('.buttonSubtract');
const buttonMultiply = document.querySelector('.buttonMultiply');
const buttonDivide = document.querySelector('.buttonDivide');
const buttonEquals = document.querySelector('.buttonEquals');
const buttonClear = document.querySelector('.buttonClear');

buttonAdd.addEventListener('click', () => {
    operator = Operations.Add;
    storeDisplayValue();
});
buttonSubtract.addEventListener('click', () => {
    operator = Operations.Subtract;
    storeDisplayValue();
});
buttonMultiply.addEventListener('click', () => {
    operator = Operations.Multiply;
    storeDisplayValue();
});
buttonDivide.addEventListener('click', () => {
    operator = Operations.Divide;
    storeDisplayValue();
});

let currentVal = null;
buttonEquals.addEventListener('click', () => {
    if(displayValue){
        currentVal = displayValue;
    }
    else{
        currentVal = 0;
    }
    
    let calculatedVal = operate(Number.parseInt(storedVal), parseInt(currentVal), operator);
    displayValue = null;
    updateDisplay(calculatedVal);
    displayValue = null;

    storedVal = calculatedVal;
});

buttonClear.addEventListener('click', () => {
    storedVal = 0;
    displayValue = null;
    updateDisplay(0);
});