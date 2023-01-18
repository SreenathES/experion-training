const employees = ['Tony', 'Tom', 'Akhil', 'Steve', 'Clint', 'Rob', 'Barry'];

function punching(person, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person != 'Akhil') {
                resolve(`Welcome ${person}`);
            }
            reject('Access denied')
        }, time);
    });
}

employees.forEach(employee => {
    punching(employee, 2000).then((res) => {
        console.log(res);
    }).catch((rej) => {
        console.log(rej);
    });
});





