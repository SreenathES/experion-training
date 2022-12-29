var data = "This is a string";
console.log(data[0]);
console.log(data.toLowerCase()); 
console.log(data.length);
console.log(data[data.length - 1]);

var result = data.toUpperCase(); //execution starts at right side
console.log(result)

var message = '    Js for web    ';
console.log(message);
console.log(message.trim()); //remove left and right spaces
console.log(message.trimEnd());
console.log(message.trimStart());

var content = 'JS for web';
console.log(content.split(' '));

// var replace = content.replace(' ','_'); only replace first occurrence
var replace = content.replaceAll(' ','_');
console.log(replace);
