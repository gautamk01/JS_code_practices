const array1 = [1, 4, 2, 6, 23, 76, 254];
const hobbies = ['football','cricket','Hokey','running'];


for (const i of array1) {
    console.log(i);
}

for (const i of hobbies.entries()) {
    console.log(`${i[0]+1} : ${i[1]}`);
}

console.log(...array1.entries());
