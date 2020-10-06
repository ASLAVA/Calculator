import {equals} from './calculations.js'


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
let cleanFlag = 0;
let inputArray = [];
//Listner for numbers. Calls numInput to add numbers to display text string.
//goal is to take that string when operand is called and convert to int/float
//and then put it in array or stack for later calculations.
for(let i = 0; i<numbers.length; ++i){
    numbers.item(i).addEventListener('click', numInput);
}
function numInput(){
    if (cleanFlag > 0){
        display.textContent = 0;
        cleanFlag = 0;
        if (decFlag > 0){
            decimal.addEventListener('click', numInput);
            decFlag = 0;
        }
    }
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
function clean(input){
    
    console.log(input);
    if (this.matches('#clear') || display.textContent.length == 1) {
        display.textContent = 0;
        if (decFlag > 0){
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

//listners for operands
for (let i = 0; i < operative.length; ++i){
    operative.item(i).addEventListener('click', operate);
}
function operate(){
    if (decFlag > 0)
        inputArray.push(parseFloat(display.textContent));
    else inputArray.push(parseInt(display.textContent));
    /* if (this.matches('#equal')){
        
    } */
    switch (this){
        case equal:
            display.textContent = equals(inputArray);
        default:
            inputArray.push(this.textContent);
            cleanFlag++;
        
    }
}


