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
    .set(true, 'We have a good day :)');

console.log(rest.get('name'));
console.log(rest.get(true));
