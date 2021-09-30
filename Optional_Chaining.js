
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: openingHours,
    order(sindex, mindex) {
        return [this.starterMenu[sindex], this.mainMenu[mindex]];
    }
};

//old methord optional chaining
if (restaurant.openingHours && restaurant.openingHours.fri) {
    console.log(restaurant.openingHours.fri.open);
}

//ES6 optional chaining ?. -means if it is exsiste
console.log(restaurant.openingHours.fri?.open);//this will work only when 'restaurant.openingHours.fri' is true 

//if it is false it will print undefined
console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.openingHours?.mon?.open);//in this line of code we can see that if 'restaturant.openingHours' is present then only it will analise the new word which is 'mon' in the line of code  



//Example 

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const i of days) {
    const open = restaurant.openingHours[i]?.open ?? 'closed';
    console.log(`on ${i}, we are open ${open}`);
}

//Methords
console.log(restaurant.order?.(0, 1) ?? 'Methord does not exsite');
console.log(restaurant.ordertaken?.(0, 1) ?? 'Methord does not exsite');

//Arrays
const user = [{ name: 'Gautam', email: 'gautam@gmail.com' }];
console.log(user[0]?.name ?? 'User array is empty');
console.log(user[2]?.name ?? 'User array is empty');


