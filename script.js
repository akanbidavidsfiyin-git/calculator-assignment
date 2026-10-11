function add() {
    let inputField1 = document.getElementById("input1");
    let inputField2 = document.getElementById("input2");

    let outputField = document.getElementById("screen");

    let inputValue1 = +(inputField1.value);
    let inputValue2 = +(inputField2.value);

    let total = inputValue1 + inputValue2;

    outputField.innerHTML = total;
}

function subtract() {
    let inputField1 = document.getElementById("input1");
    let inputField2 = document.getElementById("input2");

    let outputField = document.getElementById("screen");

    let inputValue1 = +(inputField1.value);
    let inputValue2 = +(inputField2.value);

    let total = inputValue1 - inputValue2;

    outputField.innerHTML = total;
}

function multiply() {
    let inputField1 = document.getElementById("input1");
    let inputField2 = document.getElementById("input2");

    let outputField = document.getElementById("screen");

    let inputValue1 = +(inputField1.value);
    let inputValue2 = +(inputField2.value);

    let total = inputValue1 * inputValue2;

    outputField.innerHTML = total;
}

function divide() {
    let inputField1 = document.getElementById("input1");
    let inputField2 = document.getElementById("input2");

    let outputField = document.getElementById("screen");

    let inputValue1 = +(inputField1.value);
    let inputValue2 = +(inputField2.value);

    let total = inputValue1 / inputValue2;

    outputField.innerHTML = total;
}

function mod() {
    let inputField1 = document.getElementById("input1");
    let inputField2 = document.getElementById("input2");

    let outputField = document.getElementById("screen");

    let inputValue1 = +(inputField1.value);
    let inputValue2 = +(inputField2.value);

    let total = inputValue1 % inputValue2;

    outputField.innerHTML = total;
}