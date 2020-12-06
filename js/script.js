// VARIABLES
let firstNum = null;
let secondNum = null;
let operation = null;

// TAGS
const calcView = document.querySelector("#calc-view");
const nums = document.querySelectorAll(".num")
const funcs = document.querySelectorAll(".func")
const view = document.querySelector('#calc-view')

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
    return func(a,b);
}

function updateDisplayString(letter) {
    displayString += letter;
    calcView.textContent = displayString;
} 

const addNumber = function() {
    if (view.textContent.includes(".") & this.textContent==="."){
        // DO NOTHING
    } else{
        if (view.textContent==="0"){
            view.textContent = this.textContent;
        } else {
            view.textContent += this.textContent;
        }        
    }
}

const returnOperation = function(letter) {
    switch(this.textContent) {
        case "+":
            return add;
            break;
        case "-":
            return subtract;
            break;
        case "/":
            return divide;
            break;
        case "*":
            return multiply;
            break;    
      }
}

const handleFunc = function(letter) {
   if (firstNum === null & operation === null) {
        firstNum = +view.textContent
        operation = returnOperation(letter)
   }
}


// LOGIC
funcs.forEach(element => {
    element.addEventListener("click", handleFunc)    
});

nums.forEach(element => {
    element.addEventListener("click", addNumber);
})

// function() {
//     console.log(element.textContent)
//     view.textContent += element.textContent
// })    
