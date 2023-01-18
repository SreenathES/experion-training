const trainees = ['Arjun', 'Aswin', 'Bibin', 'Sreenath', 'Sharath'];
const drinkOptions = ['Tea', 'Coffee', 'Hot water'];
const waitingTime = 4000;
const drinkPreparingTime = 4000;

function queue(trainee, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const option = Math.floor(Math.random() * 2);
            resolve([trainee,  option])
        }, time);
    })
}

function fillDrink(trainee, option) {
    setTimeout(() => {
        console.log(`cup taken | cup washed | user: ${trainee} | ${drinkOptions[option]} filled`);
    }, drinkPreparingTime);
}

trainees.forEach(trainee => {
    queue(trainee, waitingTime).then((response) => {
        console.log('cup taken | cup washed |');
        fillDrink(response[0], response[1]);
    })
});

// take cup, wash cup, enter to queue (4sec in queue)
// choose option [tea,coffee,hot] (random)
// 4 sec to fill drink in cup
// machine refill - 3 sec