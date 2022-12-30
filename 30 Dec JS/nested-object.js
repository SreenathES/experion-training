const person = {
    name: 'John Doe',
    age: 20,
    email: 'john.2022@gmail.com',
    experience: [
        {
            company: 'Company ABC',
            years: 2
        },
        {
            company: 'Company XYZ',
            years: 3
        }
    ]
};

console.log(person);

 // To get the first company name

// console.log(person.experience[0].company);

// To print all companies

person.experience.forEach(experience => { 
    console.log(experience.company, experience.years);
});