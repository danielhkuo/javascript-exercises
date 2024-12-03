const leapYears = function(year) {
    if (year%100 == 0) {
        return (year%400 == 0) ? true : false;
    }
    else if (year%4 == 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
