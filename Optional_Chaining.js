
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
};

//old methord optional chaining
if (restaurant.openingHours && restaurant.openingHours.fri) {
    console.log(restaurant.openingHours.fri.open);
}

//ES6 optional chaining
console.log(restaurant.openingHours.fri?.open);//this will work only when 'restaurant.openingHours.fri' is true 
