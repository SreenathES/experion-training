const numbers = [1, 2, 3, 'four']; // array is able to keep values of different types
numbers[0] = 100; // updating an element
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[30]); // output : undefined
numbers[4] = 5; // add the 5 to end of the array
// numbers[10] = 5; add 5 to 10th position and insert empty items to blank spaces, storage consuming
numbers.push(6); // proper way to add an item to end of the array
console.log(numbers);

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6, 7];

// for (let i = 0; i < secondArray.length; i++) { 
//     const element = secondArray[i];
//     firstArray.push(element); 
// }

// firstArray.push(secondArray); it will insert the secondArray as array
// firstArray.push(...secondArray); // insert elements of secondArray to the end of firstArray | modifies existing array
const thirdArray = firstArray.concat(secondArray); // concat combine arrays and return new array without modifying existing arrays
console.log(thirdArray);

// const : cannot reassign , can change the values } only in case of arrays
// compiler read the code and optimize the code if necessary