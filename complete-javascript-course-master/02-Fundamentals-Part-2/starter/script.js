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