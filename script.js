

function add(){
    solution = number1+number2
    return solution

}

function substract(){
    solution = number1-number2
    return solution

}

function multiply(){
    solution = number1*number2
    return solution

}

function divide(){
    solution = number1/number2
    return solution

}

function operate(){
    if (operand == "+"){add(number1, number2)}

    if (operand == "-"){substract(number1, number2)}

    if (operand == "*"){multiply(number1, number2)}

    if (operand == "/"){divide(number1, number2)}
}

function populateDisplay(value){
display = display+value;
return display
}

let number1 = 4;

let number2 = 2;

let operand = "/";

let solution;

let display = "";

//querySelector to all buttons

const buttons = document.querySelectorAll(".digit, .digit0, .operand, .operandPlus, .equals, .clear")

//addEventlistener click

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.className === "digit" || "digit0" || "operand" || "operandPlus"){populateDisplay(button.textContent)}

      if (button.className === "equals"){/*evaluate numbers and operands*/ console.log("=")}

      if (button.className === "clear"){clearScreen(); console.log("clear")}

      else;
    });
  });

//function value --> populateDisplay() or C function --> clearScreen()

console.log(display);




//****Test */

//add(number1, number2);

//substract(number1, number2);

//multiply(number1, number2);

//divide(number1, number2);

//operate(number1, number2, operand);


//console.log(solution)

