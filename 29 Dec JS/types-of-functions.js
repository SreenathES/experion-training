function getFirstChar1(value) {
    return value[0];
}

const getFirstChar2 = function (value) {
    return value[0];
};

const getFirstChar3 = (value) => {
    return value[0];
};

const getFirstChar4 = value => value[0]; // can use this method if there is only one parameter and only one item to return

console.log(getFirstChar1('Hello'));
console.log(getFirstChar2('Hello'));
console.log(getFirstChar3('Hello'));
console.log(getFirstChar4('Hello'));

