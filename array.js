var friendAge = [20, 22, 25, 26, 27];

console.log(typeof friendAge);

var myGirlFriend = ['Sohana', 'Ahona', 'Anona', 'Monisha', 'Munni'];

console.log(myGirlFriend);

// Lenght of a array
console.log(myGirlFriend.length)



// Index of arrays
var car = ['Bmw', 'Ford', 'Toyata', 'Mazda', 'Tata'];


//get array from index
console.log(car[0]);

//set array in index
car[2] = 'Mr.Bean er gari';
console.log(car);


// Find the index of array
console.log(car.indexOf('Tata'));

console.log(myGirlFriend.indexOf('Monisha'));

console.log(friendAge.indexOf(25));


// Array push

var numbers = [78, 45, 98, 45]

numbers.push(100);

console.log(numbers);

var fruits = ['Mango', 'Banana', 'Orange'];

fruits.push('Dragon fruit');

fruits.push('Jackfruit')

console.log(fruits);


//Array pop

var item = [1, 2, 3, 4, 5, 6];

item.pop();

item.push(7);

item.pop()

var element = item.pop();
console.log(element);


console.log(item);


var persons = ['Kabir', 'Safiq', 'Rakib', 'Jamil', 'Sadia'];

persons.unshift('Jakir');

console.log(persons);


var pet = ['Dog', 'Cat', 'Bird', 'Mouse'];

pet.shift();

pet.shift();

pet.unshift('Spider')

pet.unshift('Bat');

console.log(pet);

var superHero = ['Batman', 'Superman', 'Flash', 'Wonder Woman'];

superHero.push('Cyborg');

superHero.shift();

superHero.unshift('Green lantern');

superHero.pop();

superHero.pop();

console.log(superHero);
