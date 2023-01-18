function makeIceCream(flavour) {
    console.log(flavour + " flavoured cream");
}

let iceCream = makeIceCream(function (flavour) {
    console.log(flavour + " flavoured cream")
    return "good"
}, "strawberry");

let ice = makeIceCream((flavour) => {
    console.log(flavour + " flavoured cream");
});

let greet = name => console.log(`Good morning ${name}`)