
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1971, 'Petar'));
console.log(yearsUntilRetirement(1976, 'Vali'));
console.log(yearsUntilRetirement(2011, 'Alex'));

const calcAge = (birthYear, firstName) => {
    age = 2024 - birthYear;
    return `${firstName} is ${age} years old.`;
}
console.log(calcAge(2011, 'Alex'));

//Using objects 
const alex = {
    firstName: 'Alex',
    lastName: 'Petrov',
    job: 'student',
    age: 2024 - 2011,
    birthYear: 2011,
    hasDriversLicense: true,
    calcAge: function () {
        console.log(this);
        this.age = 2024 - this.birthYear
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${alex.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    },
}
//Challenge
console.log(alex.getSummary())