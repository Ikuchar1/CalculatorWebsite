let num1 = 0;
let num2 = 0;

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0){
        return 0;
    } 
    return num1/num2;
}

//event listeners

const buttonDiv = document.querySelector(".buttons");
const screen = document.querySelector(".screen");

const btn0 = buttonDiv.querySelector("#btn0");
const btn1 = buttonDiv.querySelector("#btn1");
const btn2 = buttonDiv.querySelector("#btn2");
const btn3 = buttonDiv.querySelector("#btn3");
const btn4 = buttonDiv.querySelector("#btn4");
const btn5 = buttonDiv.querySelector("#btn5");
const btn6 = buttonDiv.querySelector("#btn6");
const btn7 = buttonDiv.querySelector("#btn7");
const btn8 = buttonDiv.querySelector("#btn8");
const btn9 = buttonDiv.querySelector("#btn9");
const btnD = buttonDiv.querySelector("#btnD");
const btnM = buttonDiv.querySelector("#btnM");
const btnS = buttonDiv.querySelector("#btnS");
const btnA = buttonDiv.querySelector("#btnA");
const btnAC = buttonDiv.querySelector("#btnAC");
const btnE = buttonDiv.querySelector("#btnE");

const numBtns = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

numBtns.forEach(function(button) {
    button.addEventListener('click', function() {
        // Run the concatNum function with the button's text content
        concatNum(button.textContent);
    });
});

const operations = [btnA, btnD, btnM, btnS];
operations.forEach(function(button) {
    button.addEventListener('click', function() {
        concatOperation(button.textContent);
    });
});

btnAC.addEventListener("click", function(){
    clearScreen();
    resetNums();
});

btnE.addEventListener("click", function(){
    calculate();
});


function concatNum(num){
    console.log(num);
    if(screen.textContent.length < 15){
        screen.textContent += num;
    }
}

function concatOperation(sign){
    console.log(sign);
    if(screen.textContent.length < 15){
        screen.textContent += sign;
    }
}

function clearScreen(){
    screen.textContent = "";
}

function resetNums(){
    num1 = 0;
    num2 = 0;
}

function calculate(){
    try{
        screen.textContent = eval(screen.textContent);
    } catch (error){
        screen.textContent = "ERROR";
    }
}

//starts screen off empty
screen.textContent = "";