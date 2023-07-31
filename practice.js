// Problem one 

var fruits = ['Apple' , 'Banana', 'Orange'];

//a

var banana = fruits.indexOf('Banana')

console.log(banana);

fruits[1] = 'Mango'; 

console.log(fruits); //(Solved)

//b 

fruits.pop();

fruits.push('Watermelon');

console.log(fruits); // (Solved)



// Problem two

var ahad = 85;

var tom = 66;

var jane = 95;

var peter = 56;

var john = 40;

// Ahad's Mark

if(ahad >= 80){
    console.log('A grade');
}

else if(ahad >= 60){
    console.log('B grade');
}

else if(ahad >= 50){
    console.log('C grade');
}

else if(ahad >= 40){
    console.log('D grade');
}

else{
    console.log('F grade');
}


// Tom's Mark

if(tom >= 80){
    console.log('A grade');
}

else if(tom >= 60){
    console.log('B grade');
}

else if(tom >= 50){
    console.log('C grade');
}

else if(tom >= 40){
    console.log('D grade');
}

else{
    console.log('F grade');
}

// Jane's Mark

if(jane >= 80){
    console.log('A grade');
}

else if(jane >= 60){
    console.log('B grade');
}

else if(jane >= 50){
    console.log('C grade');
}

else if(jane >= 40){
    console.log('D grade');
}

else{
    console.log('F grade');
}


// Peter's Mark

if(peter >= 80){
    console.log('A grade');
}

else if(peter >= 60){
    console.log('B grade');
}

else if(peter >= 50){
    console.log('C grade');
}

else if(peter >= 40){
    console.log('D grade');
}

else{
    console.log('F grade');
}

// john's Mark

if(john >= 80){
    console.log('A grade');
}

else if(john >= 60){
    console.log('B grade');
}

else if(john >= 50){
    console.log('C grade');
}

else if(john >= 40){
    console.log('D grade');
}

else{
    console.log('F grade');
}

//(Solved)


//Problem 3

//1

var numberOne = 13;

var numberTwo = 79;

var numberThree = 45;

if(numberOne > numberTwo){
    console.log('The large number is 13');
}

else if (numberTwo > numberThree){
    console.log('The large number is 79');
}

else if (numberThree > numberOne){
    console.log('The large number is 45');
}

else{
    console.log('There is no large number');
} // (Solved)


//2 

var sideOne = 9;

var sideTwo  = 8;

var sideThree = 9;

if(sideOne==sideTwo || sideTwo==sideThree || sideThree==sideOne){
    console.log('Isosceles Triangle');
}

else{
    console.log('Not isosceles triangle');
}

// (Solved)