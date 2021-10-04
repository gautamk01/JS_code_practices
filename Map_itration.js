const prompt = require('prompt-sync')();


const openingHours = {
    thus: {
        open: 10,
        close: 20,
    },
    fri: {
        open: 10,
        close: 24,
    },
    sat: {
        open: 9,
        close: 18,
    }
}
//coverting and object to map

const map1 = new Map(Object.entries(openingHours));
console.log(map1);

const usermap = new Map([
    ['Question', 'How are u feeling today ?'],
    [1, 'I am feeling better'],
    [2, 'today is my worst day'],
    [3, 'Yeah it is an ok day to me'],
    ['c', 1],
    [true, 'correct answer'],
    // [false, 'try again'],
]);

console.log(usermap);

console.log();
console.log(usermap.get('Question'));
for (const [key, value] of usermap) {
    if (typeof key == 'number') {
        console.log(`Answer ${key} : ${value}`);

    }
}

const Answer = Number(prompt("Enter your Answer :"));
console.log(usermap.get(usermap.get('c') === Answer));
//covert an map to array
const ArrMap = [...usermap];
console.log(ArrMap);
console.log([...usermap.keys()]);
console.log([...usermap.values()]);


