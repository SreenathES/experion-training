const student = {
    name: 'Steve',
    mark1: 40,
    mark2: 50,
};

// const copy = student; // it refers to the original object, if we change value it will affects original object too
// console.log(copy);

const studentCopy = Object.assign({ age: 29 }, student);
studentCopy.name = 'Clint';
console.log(student);
console.log(studentCopy);