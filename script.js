const display = document.querySelector("#display");
const numberBtn = document.querySelectorAll(".digit");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const eqaulBtn = document.querySelector(".equal")
const decimalBtn = document.querySelector(".decimal");
let num1 = "";
let num2 = "";
let operator = null;
let decimal = "."

//Functions for basic operations

const add = (num1,num2) => {
    return num1 + num2;
}

const subtract = (num1,num2) => {
    return num1 - num2;
}

const divide = (num1,num2) => {
    return num1 / num2;
}

const multiply = (num1,num2) => {
    return num1 * num2;
}

//create a function 'operate' that takes an operator and two numbers and then calls one of the above functions.
const operate = (num1,operator,num2) => {
    const operations = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide
    };
    return operations[operator](num1,num2);
}


operatorBtn.forEach((button) => {
    button.addEventListener("click", () =>{
        operator = button.textContent;
    });
});

decimalBtn.addEventListener ("click", () => {
    if (operator === null ){
        if (!num1.includes(".")){
            num1 += ".";
            display.textContent = num1;
        }
    } else{
        if (!num2.includes(".")){
            num2 += ".";
            display.textContent = num2;
        }
    }
})

numberBtn.forEach((button) =>{
    button.addEventListener("click", () =>{  
        const buttonValue = button.textContent;
        if (operator === null ){
            num1 += buttonValue;
            display.textContent = num1;
        } else{
            num2 += buttonValue;
            display.textContent = num2;
        }
    })
});


eqaulBtn.addEventListener("click", () => {
    const result = operate(parseFloat(num1), operator, parseFloat(num2));
    display.textContent = result;
    num1 = result;
    num2 = "";
    operator = null;
    decimal = "."
});

clearBtn.addEventListener("click", () =>{
    display.textContent = "0";
    num1 = "";
    num2 = "";
    decimal = "";
})