const calculate = require('./cb.js');

calculate.calculate((num1, num2) => {
    return num1 + num2;
}, 10, 20, 2000).then((res) => {
    console.log(res);
})
