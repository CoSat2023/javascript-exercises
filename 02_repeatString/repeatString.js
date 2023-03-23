const repeatString = function(string, num) {
    let stringToRepeat = '';
    if (num < 0) {
        return("ERROR");
    } else {
        for (let i = 0; i < num; i++) {
            stringToRepeat += string;
        }
    }

    return(stringToRepeat);
}

// Do not edit below this line
module.exports = repeatString;
