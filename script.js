const display = document.getElementById('display');

function inputToDisplay(input) {
    display.value += input;
}

function clearDisplay(input){
    display.value = " ";
}

function calculateValue(input){
    display.value = eval(display.value);
}

function backSpace(input){
    display.value = display.value.toString().slice(0, -1);
}