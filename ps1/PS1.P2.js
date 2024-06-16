const evaluateExpression = expression => {
    const [left, operator, right] = expression.match(/(\d+)([\+\-\*\/\^])(\d+)/).slice(1);
    const leftNum = Number(left);
    const rightNum = Number(right);
    let result;

    switch (operator) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            result = leftNum / rightNum;
            break;
        case '^':
            result = Math.pow(leftNum, rightNum);
            break;
        default:
            throw new Error('Unsupported operator');
    }

    return result;
};

// Testing the function
console.log(`${'4+2'} = ${evaluateExpression('4+2')}`); // Result: 6
console.log(`${'5*7'} = ${evaluateExpression('5*7')}`); // Result: 35
console.log(`${'6-1'} = ${evaluateExpression('6-1')}`); // Result: 5
console.log(`${'9/2'} = ${evaluateExpression('9/2')}`); // Result: 4.5
console.log(`${'2^8'} = ${evaluateExpression('2^8')}`); // Result: 256
