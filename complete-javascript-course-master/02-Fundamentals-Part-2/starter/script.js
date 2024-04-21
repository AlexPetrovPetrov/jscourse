
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