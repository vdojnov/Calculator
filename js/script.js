// VARIABLES
let firstNum = null;
let secondNum = null;
let operation = null;

// HTML TAGS
const calcView = document.querySelector("#calc-view");
const nums = document.querySelectorAll(".num")
const funcs = document.querySelectorAll(".func")
const view = document.querySelector('#calc-view p')
const calcs = document.querySelectorAll(".calc")

// FUNCTIONS
const add = function(a,b) {
    return a + b;
}

const subtract = function(a,b) {
    return a - b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    return a / b;
}

const operate = function(a,func,b) {
    if (func===subtract & b === 0) {
        return "yikes"
    } else {
        return func(a,b);
    }
    
}

function updateDisplayString(letter) {
    displayString += letter;
    calcView.textContent = displayString;
} 

const addNumber = function() {
    if (view.textContent.includes(".") & this.textContent==="."){
        // DO NOTHING
    } else{
        let oneChar = view.offsetWidth/view.textContent.length;
        if (!oneChar) {
            oneChar = 0;
        }
        if (calcView.offsetWidth - view.offsetWidth -20 > oneChar) {
            if (view.textContent==="0"){
                view.textContent = this.textContent;
            } else {
                view.textContent += this.textContent;
            }   
            console.log(view.offsetWidth)    
        } 
    }
}

const returnOperation = function(sign) {
    console.log(sign==="+")
    // SWITCH STATEMENT NOT WORKING HERE??? WHY?
    if (sign==="+"){
        return add;
    }
    if (sign==="-"){
        return subtract;
    }
    if (sign==="/"){
        return divide;
    }
    if (sign==="x"){
        return multiply;
    }
}


const handleCalc = function() {
    console.log("calcs")
    if (firstNum === null & operation === null) {
        firstNum = +view.textContent;
        operation = returnOperation(this.textContent);
        // console.log(operation);
        view.textContent = "";
   }
}

const handleFuncs = function() {
    console.log("funcs")
    
    switch(this.textContent) {
        case "<":
            view.textContent = view.textContent.slice(0, view.textContent.length - 1)
            break;
        case "Clear":
            firstNum = null;
            secondNum = null;    
            operation = null;
            view.textContent = 0;
            break;
        case "+/-":
            if (view.textContent[0] === "-") {
                view.textContent = view.textContent.slice(1, view.textContent.length);
            } else {
                view.textContent = "-" + view.textContent;
            }
            break;
        case "=":
            secondNum = +view.textContent
            view.textContent = operate(firstNum, operation, secondNum);
            let i=0;
            while (view.offsetWidth > calcView.offsetWidth - 50) {
                view.textContent = view.textContent.slice(0, view.textContent.length - 1);
                i++;
            }
            if (i>0) {
                i +=2;
                view.textContent = view.textContent.slice(0, view.textContent.length - 2) + "e" + i;
            }
            firstNum = null;
            secondNum = null;    
            operation = null;
            break;
      }
}





// LOGIC
calcs.forEach(element => {
    element.addEventListener("click", handleCalc)    
});

nums.forEach(element => {
    element.addEventListener("click", addNumber);
})

funcs.forEach(element => {
    element.addEventListener("click", handleFuncs);
})



