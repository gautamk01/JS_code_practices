const array1 = [1, 4, 2, 6, 23, 76, 254];
const hobbies = ['football', 'cricket', 'Hokey', 'running'];


for (const i of array1) {
    console.log(i);
}

console.log(...array1.entries());

//old school methord
for (const i of hobbies.entries()) {
    console.log(`${i[0] + 1} : ${i[1]}`);
}
console.log();

//destructuring methord
for (const [i, el] of hobbies.entries()) {
    console.log(`${i + 1} : ${el}`);
}