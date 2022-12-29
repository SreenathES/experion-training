function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function addTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function convertCasing(value) {
    return value.toUpperCase();
}

const sum = addTwoNumbers(1, 5);
const result = convertCasing('Hello');
add(1, 2);
console.log(sum);
console.log(result.toLowerCase());

