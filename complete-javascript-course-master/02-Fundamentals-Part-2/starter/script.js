// using function declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}
const age1 = calcAge1(2011);
console.log(age1)
//Using function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear
}
const age2 = calcAge2(2005)
console.log(age1, age2)