// switch statement
const day = 'Wednesday'
// switch (day) {
//     case 'Monday':
//         console.log("Train in the morning.")
//         console.log("Solve mathematical problems.")
//         console.log("Learn a bit of javascript.")
//         break;
//     case 'Tuesday':
//         console.log("Train in the morning.")
//         console.log("Read some book.")
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log("Solve mathematical problems.")
//         console.log("Go out with my friends and have fun.")
//         break;
//     case 'Friday':
//         console.log("Be lazy all day")
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log("Learns some javascript")
//         console.log("Learn new formulas for the 3by3 and 4by4 rubicks cubes.")
//         break;
//     default:
//         console.log("Not a valid day")
//}
if (day === 'Monday') {
    console.log("Train in the morning.")
    console.log("Solve mathematical problems.")
    console.log("Learn a bit of javascript.")
} else if (day === 'Tuesday') {
    console.log("Train in the morning.")
    console.log("Read some book.")
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log("Solve mathematical problems.")
    console.log("Go out with my friends and have fun.")
} else if (day === 'Friday') {
    console.log("Be lazy all day")
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log("Learns some javascript")
    console.log("Learn new formulas for the 3by3 and 4by4 rubicks cubes.")
} else {
    console.log("Not a valid day.")
}