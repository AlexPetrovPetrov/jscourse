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