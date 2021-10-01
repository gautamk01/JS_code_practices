
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

//property Name
const properties = Object.keys(openingHours);
console.log(properties);

for (const day of properties) {
    console.log(day);

}

//property values
const values = Object.values(openingHours);
console.log(values);


//Enteries 
const entries = Object.entries(openingHours);

//enteries basically makes key and values to an array 
for (let x of entries) {
    console.log(x);
}

for (const [key, { open, close }] of entries) {
    console.log(`On ${key}-day we will be opened at ${open} and close at ${close}`);

}
