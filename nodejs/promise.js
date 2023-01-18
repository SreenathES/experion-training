
function calculate() {
    return new Promise(function (bibin, nimisha) {
        setTimeout(function () {
            bibin(10 + 10)
        }, 7000)
    })

}
calculate().then(function (res) {
    console.log(res)
})



let sum = calculate();
console.log(sum)

