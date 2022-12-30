const student = {
    name: 'Steve'
};

const marks = {
    name: 'John',
    mark1: 40,
    mark2: 50
};

const studentCopy = Object.assign({ age: 29 }, student, marks);
console.log(student);
console.log(marks);
console.log(studentCopy);