/**
 * Checks wheter a char is an operator or a digit
 * and pushes the result to the stack
 * @param Array input Array of characters
 */
function kellerautomat(input) {
    const isDigit = new RegExp('\\d');
    const isOperator = new RegExp('[+*/-]');    
    const stack = [];
    
    console.log('Input:', input.join(''));
    console.log('Stack:', stack);
    input.forEach(c => {
        if (isDigit.test(c)) {
            stack.push(parseInt(c));
        } else if (isOperator.test(c)) {
            stack.push(calc(stack.pop(), c, stack.pop()));
        } else {
            console.error('Something went wrong, char:', c);
        }
        console.log('Char:', c, ' Stack:', stack);
    });

    let returnVal = stack.pop();
    return isNaN(returnVal) ? 'Verwerfend' : returnVal;
}

/**
 * Executes the calculate operation
 * @param right number as int
 * @param op operator as char
 * @param left number as int
 */
function calc(right, op, left) {
    switch(op) {
        case '+': return left + right;
        case '-': return left - right;
        case '/': return left / right;
        case '*': return left * right;
        
        default:
            console.error('Something went wrong', op);
            return 0;
    }
}

exports.run = kellerautomat;