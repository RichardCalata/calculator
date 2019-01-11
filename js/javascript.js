var btnOne = document.getElementById("calc-one");
var btnTwo = document.getElementById("calc-two");
var btnThree = document.getElementById("calc-three");
var btnFour = document.getElementById("calc-four");
var btnFive = document.getElementById("calc-five");
var btnSix = document.getElementById("calc-six");
var btnSeven = document.getElementById("calc-seven");
var btnEight = document.getElementById("calc-eight");
var btnNine = document.getElementById("calc-nine");
var btnZero = document.getElementById("calc-zero");

var btnDecimal = document.getElementById("calc-decimal");

var btnAdd = document.getElementById("calc-add");
var btnMinus = document.getElementById("calc-minus");
var btnMultiply = document.getElementById("calc-multiply");
var btnDivide = document.getElementById("calc-divide");
var btnEquals = document.getElementById("calc-equals");

var btnBackspace = document.getElementById("calc-backspace");
var displayValElement = document.getElementById("calc-display-val");
var btnClear = document.getElementById("calc-clear");

var btnNumber = document.getElementsByClassName("calc-btn-num");
var btnOperator = document.getElementsByClassName("calc-btn-operator");

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var updateDisplayVal = (clickObj) =>{
    var btnText = clickObj.target.innerText;
    if(displayVal === '0')
        displayVal = '';
    displayVal += btnText;
    displayValElement.innerText = displayVal;
};

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch(operator){
        case '+':
            pendingVal =displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;

        case '-':
            pendingVal =displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;

        case '*':
            pendingVal =displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal =displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
           evalStringArray.push(displayVal);
           var evaluation = eval(evalStringArray.join(' '));
           displayVal = evaluation + '';
           displayValElement.innerText = displayVal;
           evalStringArray = [];
    }

};

for (let i = 0; i < btnNumber.length; i++){
    btnNumber[i].addEventListener('click', updateDisplayVal, false);
}

for (let i = 0; i < btnOperator.length; i++){
    btnOperator[i].addEventListener('click',performOperation, false);
}

btnClear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerText = displayVal;
};

btnBackspace.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0,lengthOfDisplayVal-1);
  if(displayVal === '')
      displayVal ='0';
  displayValElement.innerText = displayVal;
};

btnDecimal.onclick = () => {
    if(!displayVal.includes('.'))
        displayVal += '.';
        displayValElement.innerText = displayVal;
};