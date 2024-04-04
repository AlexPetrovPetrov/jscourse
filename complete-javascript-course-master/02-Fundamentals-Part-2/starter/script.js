function logger() {
    console.log('My name is Alex')
}
// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const fruitJuice = fruitProcessor(5, 9);
console.log(fruitJuice);