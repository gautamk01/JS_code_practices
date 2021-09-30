const weekday = ['thu', 'fri', 'sat'];

const openingHours = {
    [weekday[0]]: {
        open: 12,
        close: 22,
    },
    [`day -${weekday[1]}`]: {
        open: 11,
        close: 23,
    },
    [weekday[2]]: {
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

    //ES6 enhanced object literal
    openingHours,
    order(starterIndex, mainIndex) { //function
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
};

console.log(restaurant.openingHours);
