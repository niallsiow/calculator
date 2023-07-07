const Operations = {
    Add:        "add",
    Subtract:   "subtract",
    Multiply:   "multiply",
    Divide:     "divide"
}

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

let val1 = null;
let val2 = null;

let calculatedVal = null;

let operator = null;
let displayValue = 0;

const display = document.querySelector('.display');

function updateDisplayValue(input){
    if(calculatedVal){
        calculatedVal = null;
    }

    if(!displayValue){
        if(input === '0'){
            return;
        }

        displayValue = input;
    }
    else{
        displayValue += input;
    }

    updateDisplay();
}

function updateDisplay(){
    let displayOperator = '';
    switch(operator){
        case Operations.Add:
            displayOperator = '+';
            break;
        case Operations.Subtract:
            displayOperator = '-';
            break;
        case Operations.Multiply:
            displayOperator = '*';
            break;
        case Operations.Divide:
            displayOperator = '/';
            break;
        default:
            displayOperator = '';
    }

    if(calculatedVal){
        display.textContent = calculatedVal;
    }
    else if(val1 === null){
        display.textContent = displayValue;
    }
    else if(!displayValue){
        display.textContent = val1 + ' ' + displayOperator;
    }
    else{
        display.textContent = val1 + ' ' + displayOperator + ' ' + displayValue;
    }
}

function selectOperator(inputOperator){
    operator = inputOperator;

    if(calculatedVal){
        val1 = calculatedVal;
        calculatedVal = null;
    }
    else if(displayValue){
        val1 = displayValue;
    }
    else{
        val1 = 0;
    }

    displayValue = 0;

    updateDisplay();
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

button0.addEventListener('click', () => updateDisplayValue('0'));
button1.addEventListener('click', () => updateDisplayValue('1'));
button2.addEventListener('click', () => updateDisplayValue('2'));
button3.addEventListener('click', () => updateDisplayValue('3'));
button4.addEventListener('click', () => updateDisplayValue('4'));
button5.addEventListener('click', () => updateDisplayValue('5'));
button6.addEventListener('click', () => updateDisplayValue('6'));
button7.addEventListener('click', () => updateDisplayValue('7'));
button8.addEventListener('click', () => updateDisplayValue('8'));
button9.addEventListener('click', () => updateDisplayValue('9'));

const buttonAdd = document.querySelector('.buttonAdd');
const buttonSubtract = document.querySelector('.buttonSubtract');
const buttonMultiply = document.querySelector('.buttonMultiply');
const buttonDivide = document.querySelector('.buttonDivide');
const buttonEquals = document.querySelector('.buttonEquals');
const buttonClear = document.querySelector('.buttonClear');

buttonAdd.addEventListener('click', () => selectOperator(Operations.Add) );
buttonSubtract.addEventListener('click', () => selectOperator(Operations.Subtract) );
buttonMultiply.addEventListener('click', () => selectOperator(Operations.Multiply) );
buttonDivide.addEventListener('click', () => selectOperator(Operations.Divide) );

buttonClear.addEventListener('click', () => {
    val1 = null;
    val2 = null;
    calculatedVal = null;
    displayValue = 0;
    operator = null;
    updateDisplay();
});

buttonEquals.addEventListener('click', () => {
    if(displayValue){
        val2 = displayValue;
        displayValue = null;
    }
    else{
        val2 = 0;
    }
    
    calculatedVal = operate(Number.parseInt(val1), parseInt(val2), operator);

    val1 = null;
    val2 = null;
    displayValue = 0;
    operator = null;
    updateDisplay();
});