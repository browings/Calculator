

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
    /*if (operand == "+"){add(number1, number2)}

    if (operand == "-"){substract(number1, number2)}

    if (operand == "*"){multiply(number1, number2)}

    if (operand == "/"){divide(number1, number2)}*/


}

function populateDisplay(value){
let actualoperandArr = (display+value).split("");

let dotYesNo = 0;

for (let i= actualoperandArr.length-1; i > 0; i--){
         
        if (actualoperandArr[i] == ".") {dotYesNo = dotYesNo+1; if (dotYesNo > 1) {value = ""}}
        if (actualoperandArr[i] == "+") {dotYesNo = 0}
        if (actualoperandArr[i] == "-") {dotYesNo = 0}
        if (actualoperandArr[i] == "*") {dotYesNo = 0}
        if (actualoperandArr[i] == "/") {dotYesNo = 0}

        else {} 

}


display = display+value;
screen.textContent = display;

return display

}

function equals(){
    
   
    let displayArr = display.split("");
    let i=0;
    displayArr.forEach ((element) => {
        
            
        if (element == "+"||element == "-"|| element == "/"|| element == "*" )
             {i++; calculationArr[i] = element;
               i++; return i}

        else   {if (calculationArr[i] == undefined) {calculationArr[i]= ""; calculationArr[i] += element;} //calculationArr[i] = parseFloat(calculationArr[i]);}
                    else 
                    calculationArr[i] += element; //calculationArr[i] = parseFloat(calculationArr[i]);
                    return i}
         
    });

    /*calculationArr.forEach ((element) => {
        if (element.includes("1")) {element = parseFloat(calculationArr[i]);return element }
    })*/
    //check arr if "*" or "/"   yes = operate with element -1 and element +1; pop out all 3 elements and insert solution
    //                          no = next element
    
    while ( ((calculationArr.filter((element) => element == "*" || element == "/")).length) > 0) {
                
        for (let i= 0; i < calculationArr.length; i++){
        
                                                    if (calculationArr[i] == "*") {number1= parseFloat(calculationArr[i-1]);number2= parseFloat(calculationArr[i+1]); calculationArr.splice(i-1,3); calculationArr.splice(i-1,0, multiply(number1,number2)); break }
                                                    if (calculationArr[i] == "/") {number1= parseFloat(calculationArr[i-1]);number2= parseFloat(calculationArr[i+1]); calculationArr.splice(i-1,3); calculationArr.splice(i-1,0, divide(number1,number2)); break }
                                                   
                                                }
      }
     
                                                    
    //check arr if "+" or "-"   yes = operate with element -1 and element +1; pop out all 3 elements and insert solution
    //                          no = next element

    while ( ((calculationArr.filter((element) => element == "+" || element == "-")).length) > 0){
       
        for (let i= 0; i < calculationArr.length; i++){
                                                    if (calculationArr[i] == "+") {number1= parseFloat(calculationArr[i-1]);number2= parseFloat(calculationArr[i+1]); calculationArr.splice(i-1,3); calculationArr.splice(i-1,0, add(number1,number2)); break }
                                                    if (calculationArr[i] == "-") {number1= parseFloat(calculationArr[i-1]);number2= parseFloat(calculationArr[i+1]); calculationArr.splice(i-1,3); calculationArr.splice(i-1,0, substract(number1,number2)); break }
                                                   
                                                }

      }
    
    screen.textContent = calculationArr ;

    console.log(calculationArr)
}


function clearScreen(){
    display = "" ;
    screen.textContent = "" ;
    calculationArr = [""];
    return display
}

let number1 = 4;

let number2 = 2;

let operand = "/";

let calculationArr = [""];

let solution = 0;

let display = "";



const screen = document.querySelector(".display");

//querySelector to all buttons

const buttons = document.querySelectorAll(".digit, .digit0, .operand, .operandPlus, .equals, .clear")

//addEventlistener click

buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.className == "digit"){populateDisplay(button.textContent)};

      if (button.className == "digit0"){populateDisplay(button.textContent)};

      if (button.className == "operand"){populateDisplay(button.textContent)};   

      if (button.className == "operandPlus"){populateDisplay(button.textContent)}; 
      
      if (button.className == "equals"){equals()};
      
      if (button.className == "clear"){clearScreen(); console.log("clear")}
           })
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

