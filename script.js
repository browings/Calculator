

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

    if (operand == "/"){add(number1, number2)}
}

let number1 = 4;

let number2 = 2;

let operand;

let solution;

//****Test */

//add(number1, number2);

//substract(number1, number2);

//multiply(number1, number2);

//divide(number1, number2);


console.log(solution)

