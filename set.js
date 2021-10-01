//set is a collection of unique values

const oset = new Set(['pizza', 'pizza', 'Burgur', 'tantoori chicken', 'hotdog', 'hotdog']);
console.log(oset);
console.log(new Set('Gautam'));
console.log(oset.size);
console.log(oset.has('pizza'));
console.log(oset.has('chicken'));
oset.add('tea');
oset.delete('Burgur');
console.log(oset);

for (const order of oset) {
    console.log(order);
}



