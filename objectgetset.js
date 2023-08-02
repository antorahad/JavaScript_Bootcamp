var shoppingCart = {
    books: 3,
    sunglass: 2,
    keyboard: 5,
    mouse: 1,
    pen: 10
}

console.log(shoppingCart);

// When you know the property name, use dot notation to find property value
var penCount = shoppingCart.pen;

console.log(penCount);

// Alternative system to find property value

var penCount2 = shoppingCart['sunglass'];

console.log(penCount2);

//When you want to find the property name of an object

var properties = Object.keys(shoppingCart);

console.log(properties);

//When you want to find the value of an obeject

var propertyValue = Object.values(shoppingCart);

console.log(propertyValue);


// Get the property name & value
var propertyName = 'books';

var propertyValue = shoppingCart[propertyName];

console.log(propertyName,propertyValue);


// Set propety value

shoppingCart.mouse = 10;

console.log(shoppingCart);

// Alternative 

shoppingCart['mouse'] = 20;

console.log(shoppingCart);

