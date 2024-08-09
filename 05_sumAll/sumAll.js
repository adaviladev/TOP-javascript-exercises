const sumAll = function (num1, num2) {
    const isValidNumber = (num) => Number.isInteger(num) && !isNaN(num) && num >= 0;

    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return "ERROR"
    }
    
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i
    }

    // if (
    //     sum <= 0 ||
    //     !Number.isInteger(num1) ||
    //     !Number.isInteger(num2) ||
    //     isNaN(num1) ||
    //     isNaN(num2)) {
    //     return "ERROR"
    // }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
