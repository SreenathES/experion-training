let num1 = 10;
let num2 = num1;

let person = {
    name: "bibin",
    age: 22,
    score: 150
};

let person2 = { ...person };

person2.name = "nimisha";
person2.age = 22;
person2.score = 100;

console.log(person2)
console.log(person)