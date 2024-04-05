// using arrow function
// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(2011);
// console.log(age3)
const yearstillRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}
    years`;
}
console.log(yearstillRetirement(2011, 'Alex'));

