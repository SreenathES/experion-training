function calculate(calc, mark1, mark2, time) {
    return new Promise((resolve, reject) => [
        setTimeout(() => {
            let result = calc(mark1, mark2);
            resolve(result);
        }, time)
    ]);
}

calculate((first, second) => {
    return first + second;
}, 10, 20, 2000).then((res) => {
    console.log(res);
})
