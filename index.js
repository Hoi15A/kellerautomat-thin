let kellerAutomat = require('./kellerAutomat.js');

let input = [
    '10+69-/',
    '34+62+*',
    '34+*',
    '77+54-/'
];

input.forEach(i => {
    console.log('Result:',  kellerAutomat.run(i.split('')), '\n');
});
