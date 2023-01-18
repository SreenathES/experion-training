let calculate = (cb, num1, num2, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cb(num1, num2));
        }, time);
    })
}

module.exports.calculate = calculate;