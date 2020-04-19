/**
 * Evaulates a UPN string and prints the current stack in each step.
 * Uses placeholders for digit and operator and does not calculate anything.
 * @param Array input Array of characters
 */
function kellerautomat(input) {
    const stack = [];
    
    console.log('Input:', input.join(''));
    console.log('Stack:', stack);

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "D":
                stack.push("D");
                break;
            case "O":
                if (stack.length >= 2) {
                    stack.pop();
                    stack.pop();
                    stack.push("D");
                } else {
                    return 'Verwerfend';
                }
                break;
        
            default:
                console.error('Something went wrong, char:', input[i]);
                break;
        }
        console.log('Char:', input[i], ' Stack:', stack);
    }
    stack.pop();
    return stack.length === 0 ? 'Akzeptierend' : 'Verwerfend';
}


exports.run = kellerautomat;