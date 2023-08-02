function getAvrg(ass1, ass2, ass3){
   const total = ass1 + ass2 + ass3 ;
   const avrg = total / 3;
   return avrg; 
}
var myAvrg = getAvrg(58,54,60);
console.log(myAvrg);




function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
var result1 = add(15,25);
var result2 = add(25,40);
var finalResult = add (result1, result2);
console.log(finalResult);