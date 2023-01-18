function icecream(flavour, time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([flavour, time])
        }, time)
    })

}

async function order() {
    let res = await icecream("kiwi", 2000);
    console.log(`${res[0]} flavoured icecream has made in ${res[1] / 1000} seconds ...`);
}

order()