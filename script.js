import {add, subtract, multiplication, division} from "./calculations.js";

const clear = document.getElementById("clear");
const div = document.getElementById("div");
const mult = document.getElementById("mult");
const sub = document.getElementById("subt");
const add = document.getElementById("add");
const equal = document.getElementById("equal");
const display = document.getElementById("display");
const decimal = document.getElementById("dec");

const numbers = document.getElementsByClassName('number');
const action = document.getElementsByClassName('action');
const operative = document.getElementsByClassName('operative');

let decFlag = 0;

//Listner for numbers. Calls numInput to add numbers to display text string.
//goal is to take that string when operand is called and convert to int/float
//and then put it in array or stack for later calculations.
for(let i = 0; i<numbers.length; ++i){
    numbers.item(i).addEventListener('click', numInput);
}
function numInput(){
    let input = this.textContent;
    if(input === '.'){
        this.removeEventListener('click', numInput);
        decFlag++;
    }
    if (display.textContent === '0')
        if(input === '.'){
            display.textContent += input;
        }
        else display.textContent = input;
    else {
        display.textContent += input;
        
              
    } 
}

//listeners for clear and backspace buttons
for(let i = 0; i < action.length; ++i){
    action.item(i).addEventListener('click', clean);
}
//resets display to 0 on clear and if last number was backspaced
//
function clean(){
    if (this.matches('#clear') || display.textContent.length == 1) {
        display.textContent = 0;
        if (decFlag > 0){
            console.log('here');
            decimal.addEventListener('click', numInput);
            decFlag = 0;
        }
    }
    else {
        if (display.textContent[display.textContent.length-1] === '.') {
            decimal.addEventListener('click', numInput); 
            decFlag = 0;   
        }
        display.textContent = display.textContent.slice(0,-1);
    }
}


