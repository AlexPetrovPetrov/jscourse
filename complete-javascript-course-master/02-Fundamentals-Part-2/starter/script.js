const alex = [
    'Alex',
    'Petrov',
    2024 - 2011,
    'student',
    ['Dinev', 'Yoan', 'Marti'],
    true
];

for (let i = alex.length - 1; i >= 0; i--) {
    console.log(i, alex[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`)
    }
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals)