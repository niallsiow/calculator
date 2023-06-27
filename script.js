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
    Add: "add",
    Subtract: "subtract",
    Multiply: "multiply",
    Divide: "divide"
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