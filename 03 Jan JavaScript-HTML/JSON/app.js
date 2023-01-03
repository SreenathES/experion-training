const student = {
    name: 'Mr. X',
    age: 18,
    mark1: 10,
    mark2: 7
};

const data = JSON.stringify(student);
const dataAligned = JSON.stringify(student, null, 4);
console.log(data);
console.log(dataAligned);

const stringData = '{"name":"Mr. X","age":18,"mark1":10,"mark2":7}';

const jsonData = JSON.parse(stringData);
console.log(jsonData);