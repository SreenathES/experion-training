const numbers = [1, 2, 3, 4, 5];
const languages = ['C', 'C++', 'Java', 'Python'];

numbers.forEach(() => {
    console.log('Foreach loop');
});

languages.forEach(language => {
    console.log(language);
});

languages.forEach((language, index) => {
    console.log(index, language);
});

