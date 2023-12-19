const day = 'hni;h'
if (day === 'monday') {
    console.log('You need to code today')
} else if (day === 'tuesday') {
    console.log('You have swimming lessons today')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Today you have english lessons')
} else if (day === 'friday') {
    console.log('You have karate lessons')
} else if (day === 'saturday' || day === "sunday") {
    console.log('Rest because another week awaits you :>')
} else {
    console.log('Not valid day')
}

//Grade example grades are A,B,C,D and F
const grade = 'A'

switch (grade) {
    case 'A':
        console.log('Execelent')
        break
    case 'B':
    case 'C':
    case 'D':
        console.log('You passed the test')
        break
    case 'F':
        console.log('You failed the test')
        break
    default:
        console.log('Unsupported grade')
}