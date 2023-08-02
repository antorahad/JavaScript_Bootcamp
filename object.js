// Object in javascript

var person = {
    name: 'Ahad',
    age: 26,
    phone: '01632526708',
    gender: 'Male',
    email: 'antorahad6@gmail.com'
}

console.log(person);

var mobile = {
    brand: 'Samsung',
    model: 'A30',
    price: 20000,
    ram: 4,
    rom: 8,
    camera: '30px 20px'
}

console.log(mobile);


var computer = {
    bName: 'HP',
    color: 'Mat Black',
    processor: 'i5',
    ram: 8,
    harddisk: '256GB + 2TB',
    price: 55000
}

console.log(computer);

//How to find out specific property
console.log(computer.price);

console.log(computer.processor);

console.log(computer.harddisk);

// How to change a property value in object

computer.price = 70000;
computer.processor = 'i7';
computer.color = 'Silver Gray';
console.log(computer);