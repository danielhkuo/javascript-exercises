const palindromes = function (input) {
    input = input.replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "").toLowerCase();
    let reverse = input.split('').reverse().join('');
    return reverse == input;
};  

// Do not edit below this line
module.exports = palindromes;
