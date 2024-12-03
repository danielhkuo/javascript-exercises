const findTheOldest = function(people) {

    let currOldestAge = -1;
    let currOldestIdx = -1;
    for(let i = 0; i < people.length; i++) {
        let person = people[i];
        let age = (person.yearOfDeath == undefined) ? (2024 - person.yearOfBirth):(person.yearOfDeath - person.yearOfBirth);
        if (age > currOldestAge) {
            currOldestAge = age;
            currOldestIdx = i;
        }
    }
    return people[currOldestIdx]

};

// Do not edit below this line
module.exports = findTheOldest;
