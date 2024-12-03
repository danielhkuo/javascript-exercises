const sumAll = function(l, u) {

    if (!Number.isInteger(l) || !Number.isInteger(u)) {
        return 'ERROR';
    }

    if (l < 0 || u < 0) {
        return 'ERROR';
    }

    if (l > u) {
        let temp = u;
        u = l;
        l = temp;
    }

    let sum = 0;
    for (l; l <= u; l++) {
        sum += l;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
