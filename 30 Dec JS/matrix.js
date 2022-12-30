const firstMatrix = [
    [7, 8],
    [3, 4]
];
const secondMatrix = [
    [9, 3],
    [3, 4]
];
const sumArray = [
    [],
    []
];

for (let i = 0; i < firstMatrix.length; i++) {
    for (let j = 0; j < secondMatrix.length; j++) {
        sumArray[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
    }
}

console.log(firstMatrix);
console.log(secondMatrix);
console.log(sumArray);
