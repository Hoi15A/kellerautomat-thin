const kellerAutomat = require('./kellerAutomat.js');
const kellerNoCalc = require('./kellerAutomat-no-calc.js');

const stringsToValidate = [
    'DDO',
    'DDODDOO',
    'DDDO',
    'DDOO'
];

stringsToValidate.forEach(i => {
    console.log('Result:', kellerNoCalc.run(i.split('')), '\n')
});

console.log('='.repeat(50), '\n');

const toCalculate = [
    '10+69-/',
    '34+62+*',
    '34+*',
    '77+54-/'
];

toCalculate.forEach(i => {
    console.log('Result:',  kellerAutomat.run(i.split('')), '\n');
});
