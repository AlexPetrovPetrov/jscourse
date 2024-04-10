function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

function moneyMultiplayer(money) {
    return money * 4;
}
function bankAccount(netWorth, moneyInTheBank) {
    const netWorthMultiplayer = moneyMultiplayer(netWorth);
    const moneyInTheBankMultiplayer = moneyMultiplayer(moneyInTheBank);

    const loopWholeInTheMatrix = `Money in net worth stocks ${netWorthMultiplayer} and money in my bank account ${moneyInTheBankMultiplayer}`;
    return loopWholeInTheMatrix;
}
console.log(bankAccount(200000, 1000000));
// function expression
function trashBurner(givenTrash) {
    gaveTrash = givenTrash - givenTrash
    return gaveTrash;
}
console.log(trashBurner(9))
//function declarations
function deathCalc(birthYear) {
    return 80 - birthYear;
}
const yearsToLive = deathCalc(12)
console.log(yearsToLive)
//function expression arrow
const carsInGarden = averageCarCollection => 20 - averageCarCollection;
const collection = carsInGarden(2);
console.log(`the rich people have ${collection} more cars than the average family`)

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(3, 4, 5)
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgKoalas}.`);
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}.`);
    } else {
        console.log("No team has met the winning conditions");
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111); 