const repeatString = function(string, num) {
    let getString = "";  
    let i = 0; 
    if (num < 0) {
        return 'ERROR'
    }
    while(i<num) {

        getString += string;
        i++;
    }
    return getString;
};

repeatString('hi', 1)

// Do not edit below this line
module.exports = repeatString;
