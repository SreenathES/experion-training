// variables, datatypes,operators, conditional statements,loops,functions,class, asynchronous, es6

// es6

// datatypes
// string,number,array,boolean,object,undefined,null

// string - properties,methods
// number - properties,methods
// array  - properties,methods
// object - properties,methods

// declarations
let firstname = "bibin";
let age = 22;
let marks = [10, 0, 0, 20, [1, 2], { name: "bibin" }, "nimisha", "varsha", true, undefined, null, function () { console.log('hai') }]; //we can give any datatypes

let personal_info = {
    name: "bibin",
    age: 22,
    fav_foods: ["biryani", "noodles"],
    ismarried: false,
    experion: {
        email: "bibin@experionglobal.com",
        id: "bibin.sasikumar",
        package: 3,
        istrainee: true

    },
    marks,
    child: null
}//we can give any datatypes

let marriage;

let children = null;


// string 

// string - properties,methods
// properties


// length
let string = "bibin sasikumar";

// operators
// = 
// arithmetic 
// + - *  %
// comparison operators
// == === != >= <= > < >== <==
// logical
// ! & |
// augmented
// += -= *= /=

let supersecretpassword = 1234;

supersecretpassword += 1;

let Age = 22;

// 0 undefined null "" false 
// if(!false){
//     console.log("hai")
// }



// else{
//     console.log("else")

// }

let name = 'n!!!!!&&&!a@n-da-n-a'
let ext_name = ''
for (let i = 0; i < name.length; i++) {

    if (name[i] == '-' | name[i] == "@" | name[i] == "!" | name[i] == "&") {
        continue
    }
    ext_name += name[i]

}
console.log(ext_name)
function display(name, q, w, e, r, t, y, u, i) {
    return
}

let mod_name = display("nandana");

console.log(mod_name)

class Students {
    name = '';
    age = 0;
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eating = function (food) {
        console.log(this.name + " of age " + this.age + " is eating " + food)
    };

};
let nandana = new Students("nandana", 20);
let akshaya = new Students("akshaya", 21);

nandana.eating("biryani");
akshaya.eating("biryani");

