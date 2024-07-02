for (let rep = 1; rep <= 10; rep++) {
    console.log(`Football training ${rep}`)
};

const alex = [
    'Alex',
    'Petrov',
    2024 - 2011,
    'student',
    ['Dinev', 'Yoan', 'Marti'],
    true
]
const types = [];
for (let i = 0; i < 5; i++) {
    console.log(alex[i], typeof alex[i]);

    types.push(typeof alex[i]);
}

console.log(types);

const years = [1991, 2007, 1699, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i])
}
console.log(ages);
//continue and break statement
console.log(' ------ only Stirngs ------')
for (let i = 0; i < 5; i++) {
    if (typeof alex[i] !== 'number') break;

    console.log(alex[i], typeof alex[i]);
}
