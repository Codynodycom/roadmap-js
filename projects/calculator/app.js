/*
let num = 42;
let firstName = 'Eugene';
const isProgrammer = true;

let $ = 'test';
let $num = 42;
let num$ = 42;
let _ = 49;
let _num = 12;
let num_ = 12;
let camelCase = 'style of code';
let currentTheme = 'light';

alert('Hello page!');
console.log(firstName + ' ' + isProgrammer);
console.log(42 + 10);
all buttons
 */

let action;
let changeThemeHtml = document.getElementById('html');

const output = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const themeBtn = document.getElementById('change-theme');
const submitBtn = document.getElementById('submit');

console.log(changeThemeHtml.dataset.bsTheme);
console.log(`Вы ввели ${input1.value} и ${input2.value}`);
console.log(themeBtn.className)

// Change theme
themeBtn.onclick = () => {
    if (changeThemeHtml.dataset.bsTheme === 'light') {
        changeThemeHtml.dataset.bsTheme = 'dark';
        themeBtn.textContent = '☀';
        themeBtn.className = 'btn btn-light mx-5';
        submitBtn.className = 'btn btn-light mx-5';
    } else {
        changeThemeHtml.dataset.bsTheme = 'light';
        themeBtn.textContent = '🌙';
        themeBtn.className = 'btn btn-dark mx-5';
        submitBtn.className = 'btn btn-dark mx-5';
    };
};

// console.log(output.textContent);
// output.textContent = '15';

const signPlus = document.getElementById('plus');
const signMinus = document.getElementById('minus');
const signDivide = document.getElementById('divide');
const signMultiply = document.getElementById('multiply');

signPlus.onclick = () => {
    action = '+';
};
signMinus.onclick = () => {
    action = '-';
};
signDivide.onclick = () => {
    action = '/';
};
signMultiply.onclick = () => {
    action = '*';
};

function printResult(result) {
    if (result === undefined) {
        output.style.color = 'orange';
        output.textContent = 'Выберите действие над числами';
    }
    else {
        if (result < 0) {
            output.style.color = 'red';
        } else
            output.style.color = 'green';
        output.textContent = String(result);
    }
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);

    if ("+-".includes(actionSymbol))
        return actionSymbol == '+' ? num1 + num2 : num1 - num2;
    if ("*/".includes(actionSymbol))
        return actionSymbol == '*' ? num1 * num2 : num1 / num2;
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result);
}

/*
submitBtn.onclick = () => {
    if (action == '+') {
        result = Number(input1.value) + Number(input2.value);
    }
    else if (sign == '-') {
        result = Number(input1.value) - Number(input2.value);
    }
    else if (sign == '*') {
        result = Number(input1.value) * Number(input2.value);
    }
    else if (sign == '/') {
        result = Number(input1.value) / Number(input2.value);
    }
    printResult(result);
};
*/