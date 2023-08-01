// break (stop)

for (var i = 0; i < 20; i++){
    console.log(i);

    if(i > 5){
        break;
    }
}

// continue (skip)

var num = [10, 40, 60, 70, 90 ,100];

for (var i = 0; i < num.length; i++){
    var num2 = num[i];

    if(num2 > 60){
        continue;
    }

    console.log(num2);
}