const display = document.querySelector("#display")
const memoryDisplay = document.querySelector("#memory-display")
const btns = document.querySelectorAll(".btn")

let numToDisplay = []
let action;
let numA = 0;
let numB;

for (const btn of btns) {
    btn.addEventListener("click", (e) => {
        //evaluate(btn.id)
        let classes = e.target.className.split(" ")
        if (classes.includes("number")){
            numToDisplay.push(Number(btn.id))
            if (action === undefined) {
                numA = Number(numToDisplay.join(""))
            } else {
                numB = Number(numToDisplay.join(""))
            }
            
            refreshDisplay()
            console.log(numA, numB, action);
        }else{evaluate(btn.id)}

    })
}

function refreshDisplay(){
    if (numToDisplay.length === 0) {
        display.textContent = "0";
        console.log("esta vacio");
        
    
    }else {
        display.textContent = numToDisplay.join("")
        
    }
    if (action != undefined){
        let sign;
        switch (action) {
            case add:
                sign = "+"
                break;

            case subtract:
                sign = "-"
                break;

            case multiply:
                sign = "×"
                break;

            case divide:
                sign = '÷'
                break;
        
            default:
                break;
        }
        memoryDisplay.textContent = `${numA} ${sign}`
    }
}

function resetDisplay(){
    numToDisplay = []
    refreshDisplay()
}


function resetValues(){
    numToDisplay = []
    action = undefined
    numB = undefined
    memoryDisplay.textContent = ""
    refreshDisplay()
}

function finisPreviousEvaluation (){
    if (numA != undefined && numB != undefined){
        display.textContent = equal()
    }
}

function evaluate (act) {
    switch (act) {
        case "add":
            finisPreviousEvaluation()
            action = add
            resetDisplay()
            break;

        case "subtract":
            finisPreviousEvaluation()
            action = subtract
            resetDisplay()
            break;

        case "multiply":
            finisPreviousEvaluation()
            action = multiply
            resetDisplay()
            break;

        case "divide":
            finisPreviousEvaluation()
            action = divide
            resetDisplay()
            break;

        case "equal":
            if(action != undefined && numB != undefined){
                numB = Number(numToDisplay.join(""))
                let result = equal();
                if (result.toString().length > 10) {
                    result = result.toExponential(2)
                }
                display.textContent = result;
            }
            break;

        case "delete":
            numToDisplay.pop();
            refreshDisplay();
            if (action === undefined) {
                numA = Number(numToDisplay.join(""))
            }
            break;

        case "dot":
            if (!numToDisplay.includes(".")){
                numToDisplay.push(".")
                refreshDisplay();
            }
            break;

        case "clear":
            numA = 0;
            resetValues()
            break;
    
        default:
            console.log("no definido perro");
            break;
    }
}

function equal () {
    let result = action(numA, numB)
    if (result == Infinity){
        result = 0
    }
    numA = result
    
    resetValues()
    return result
}


const add = function(a, b) {
    return a + b
};

const subtract = function(a, b) {
	return a - b
};

const multiply = function(a, b) {
    return a * b
};

const divide = function(a, b) {
    return a / b
  };