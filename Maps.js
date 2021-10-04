//Maping is another type of datastruct

const rest = new Map();
rest.set('name', 'Gautam');
rest.set('1', 'anjali');
rest.set('2', 'ram');
// console.log(rest);
// console.log(rest.set('3', 'an'));


rest
    .set('hobbies', ['football', 'pc Gaming', 'Music', 'Func with friends'])
    .set('open', 11)
    .set('close', 52)
    .set(true, 'We have a good day :)')
    .set(false, "sorry we are closing :(");

console.log(rest.get('open'));
console.log(rest.get(true));
console.log();


//This is not a good practice but only to show the power of map
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('hobbies'));
rest.delete(2);
console.log(rest.size);
// rest.clear();
// console.log(rest.size);

const arr = [4, 1];
rest.set(arr, 'This works fine :)');
console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'test');


