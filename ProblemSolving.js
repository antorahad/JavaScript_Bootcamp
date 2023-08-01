//1 Display "Ajke amar mon vala ney" 39 time;

var num = 0;

while(num <= 39){
    console.log(num);
    console.log('Ajk amar mon valo nei');
    num++;
} //(Solved)


//2 Display numbers between 58 to 98

var start = 58;

while(start <98){
    console.log(start);
    start++;
}// (Solved)



//3 show all even numbers from 412 to 456

for(var i = 412; i <= 456; i++){
    if(i%2 == 0){
        console.log(i);
    } // (Solved)
}


//4 show all odd numbers 581 to 623


for(var i = 581; i <= 623; i++){
    if(i%2 !== 0){
        console.log(i);
    }
} // (Solved)


//5 Declare an array for all the topics that you have learned last few days display then as output

var topics = ['Variable', 'Operators', 'Array', 'Condition', 'loops'];

for(var i = 0; i < topics.length; i++){
    var topic = topics[i];
    console.log(topic);
} // (Solved)


//6 create an array for all the mobile phones. display the element using a while loop

var phones = ['Apple', 'Samsung', 'Nokia', 'Mi', 'Walton'];

var x= 0;

while (x < phones.length){
    var phone = phones[x];
    x++;
    console.log (phone);
} // (Solved)


//7 Run a loop from 30 to 86. this loop will stop if the value get higher than 44

for(var i = 30; i < 86; i++){

    console.log(i)

    if(i > 44){
        break;
    }
} // (Solved)


//8 Write the price of the books you have and display the prices if the lower than 200 

var bookPrice = [140, 120, 100, 340, 200, 450];

for(var i = 0; i < bookPrice.length; i++){
    var price = bookPrice[i];
    
    if(price < 200){
        continue;
    }

    console.log(price);
} // (Solved)