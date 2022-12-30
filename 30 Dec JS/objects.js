const person = {
    name: 'John Doe',
    age: 20,
    email: null
};

console.log(person);
console.log(person.name);
console.log(person['age']);

person.name = 'Tony Stark';
console.log(person.name);

person.email = 'tony3000@email.com';
console.log(person);