// if else condition

var price = 700;

var budget = 400;

if(price == budget){
    console.log('Buy');
}

else{
    console.log('Go Home');
}


// Multiple condition

var productPrice = 70000;

var salary = 60000;

var savings = 20000;


if(productPrice <= salary || (salary + savings) >= productPrice && savings >= 30000){
    console.log('I will buy the product');
}

else{
    console.log('Budget is not enough');
}


//Multistage condition

var money = 19;

var danis = 45;

var butter = 35;

var toast = 20;


if (danis < money){
    console.log('mama danis den');
}

else if (butter < money){
    console.log('dao butter dao');
}

else if (toast < money){
    console.log('de toast de');
}

else{
    console.log('maire bap baki te cha biri khamu aijka')
}



//