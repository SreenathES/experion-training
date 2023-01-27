const fs = require('fs');
const Event = require('events');
const os = require('os');
const password = require('./password')

// globals
console.log(__filename);
console.log(__dirname);

// require

module.exports.name = "akshaya";
console.log(module)

// builtin modules
// http,fs,os,path,events

// fs
let data = fs.readFileSync('./password.js', { encoding: 'utf-8', flag: 'r' });
console.log(data)
let Fs = {
    readFileSync: function (filename, obj) {
        console.log(`filename is ${filename}`);
        console.log(obj.encoding, obj.flag)
    }
};
Fs.readFileSync('password.js', { encoding: 'utf-8', flag: 'r' });
fs.readFile('./password.js', { encoding: "utf-8", flag: 'r' }, (err, data) => {
    console.log("async fs", data)
})

const events = new Event();
events.on('connected', function () {
    console.log('connected successfully')
})
events.on('connected', function () {
    console.log('connected successfully again');
});

events.emit('connected')