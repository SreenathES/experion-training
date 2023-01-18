function iceCream(makeIceCream, flavour, time) {
    setTimeout(() => {
        makeIceCream(flavour, time);
    }, time);
}

iceCream((flavour, time) => {
    console.log(`we had made ${flavour} icecream in ${time / 1000} seconds`);
}, "vanilla", 5000);