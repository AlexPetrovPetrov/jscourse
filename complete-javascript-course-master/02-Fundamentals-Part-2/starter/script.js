// Basic array operation 
const friends = ['Yoan', 'Marti', 'Velizar'];
const newLenght = friends.push('Stefan');
console.log(friends);
console.log(newLenght)
friends.unshift('Dinev');
console.log(friends);

friends.pop()
const popped = friends.pop();
console.log(popped)
console.log(friends)
friends.shift()
console.log(friends)

console.log(friends.indexOf('Stefan'));
console.log(friends.indexOf('Bill'));
friends.push(23);
console.log(friends.includes('Stefan'));
console.log(friends.includes('Bill'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter')
}