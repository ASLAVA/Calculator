const zero = document.getElementById("");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backbutton");
const div = document.getElementById("div");
const mult = document.getElementById("mult");
const sub = document.getElementById("subt");
const add = document.getElementById("add");
const equal = document.getElementById("equal");
const display = document.getElementById("display");


const numbers = document.getElementsByClassName('number');
const action = document.getElementsByClassName('action');
const operative = document.getElementsByClassName('operative');
var currentArray = [];
var totalArray = [];

function singleNum(arg) {
    let returnVal = "";
    for(let i=0; i < arg.length; i++){
        returnVal += arg[i];
    }
    return parseFloat(returnVal);
}

function operandCall(input) {
    if (!currentArray[currentArray.length-1].match(/\d/g))
        break;
    if (currentArray[currentArray.length-1].match(/./g)){
        currentArray.push(0);
    }
    let value = singleNum(currentArray);
}

function numberCall(currentArray) {
    return currentArray.match(/[+*-\/]/g);
}