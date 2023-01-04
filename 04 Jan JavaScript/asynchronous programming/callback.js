function doThisLongRunningTask(callback) {
    setTimeout(() => {
        const name = 'JavaScript';
        callback(name); // showResult(name)
    }, 5000);
}

function showResult(res) {
    console.log(res);
}

doThisLongRunningTask(showResult);
console.log('I am done');