let result = 0;
let op = null;

const handlePlusClick = () => {
    const textNumber = document.querySelector('#text-number');
    const number = parseInt(textNumber.textContent, 10);

    op = '+';
    result += number;

    const textResult = document.querySelector('#text-result');
    textResult.textContent = result;

    //textNumber.textContent = 0;

};

const handleMinusClick = () => {
    const textNumber = document.querySelector('#text-number');
    const number = parseInt(textNumber.textContent, 10);

    op = '-';
    result -= number;

    const textResult = document.querySelector('#text-result');
    textResult.textContent = result;

    //textNumber.textContent = 0;

};

const handleTimesClick = () => {
    const textNumber = document.querySelector('#text-number');
    const number = parseInt(textNumber.textContent, 10);

    //op='*';
    result *= number;

    const textResult = document.querySelector('#text-result');
    textResult.textContent = result;

    //textNumber.textContent = 0;

};

const handleDivisionClick = () => {
    const textNumber = document.querySelector('#text-number');
    const number = parseInt(textNumber.textContent, 10);

    //op = '/';
    result /= number;

    const textResult = document.querySelector('#text-result');
    textResult.textContent = result;

    //textNumber.textContent = 0;

};

const handleClearClick = () => {
    const textNumber = document.querySelector('#text-number');
    textNumber.textContent = 0;

    const textResult = document.querySelector('#text-result');
    textResult.textContent = 0;

};

const handleEqualsClick = () => {

    const textNumber = document.querySelector('#text-number');
    const number = parseInt(textNumber.textContent, 10);

    
    switch(op){
        case '+':
            result += number;
            break;
        case '-':
            result -= number;
            break;
        case '*':
            result += number;
            break;
        case '/':
            result -= number;
            break;  
       
    }

    const textResult = document.querySelector('#text-result');
    textResult.textContent = result;
    

    textNumber.textContent = 0;

};

const handleNumbersClick = (e) => {
    const number = e.target.value;

    const textNumber = document.querySelector('#text-number');
    textNumber.textContent= number;

}


document.addEventListener('DOMContentLoaded', () => {

    const btnPlus = document.querySelector('#btn-plus');
    btnPlus.addEventListener('click', handlePlusClick);

    const btnMinus = document.querySelector('#btn-minus');
    btnMinus.addEventListener('click', handleMinusClick);

    const btnTimes = document.querySelector('#btn-times');
    btnTimes.addEventListener('click', handleTimesClick);

    const btnDivision = document.querySelector('#btn-division');
    btnDivision.addEventListener('click', handleDivisionClick);

    const btnClear = document.querySelector('#btn-clear');
    btnClear.addEventListener('click', handleClearClick);

    const btnNumbers = document.querySelectorAll('.number__btn');
    for (const button of btnNumbers) {
        button.addEventListener('click',handleNumbersClick);
    }

    const btnEquals = document.querySelector('#btn-equals');
    btnEquals.addEventListener('click', handleEqualsClick);

});