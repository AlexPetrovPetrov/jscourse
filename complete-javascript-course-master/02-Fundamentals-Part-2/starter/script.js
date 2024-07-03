let performance = 1;
while (performance <= 10) {
    console.log(`The young rock star performed on stage ${performance} times in New York!!🤘`);
    performance++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`The dice rolled and the number was ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('The loop is about to end...🔚')
    }

}