const firstArray = [
    [1, 2],
    [3, 4]
];
const secondArray = [
    [1, 2],
    [3, 4]
];
const sumArray = [
    [],
    []
];

for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
        sumArray[i][j] = firstArray[i][j] + secondArray[i][j];
    }
}

console.log(firstArray);
console.log(secondArray);
console.log(sumArray);
