/*




alert('working!');

var num1 = 5;
var num2 = 7;
var num3 = 23;
var num4 = 78;
var num5 = 9.1;

var total = num1 + num2 + num3 + num4 + num5;
alert('the total is ' + total);

// for(start; end condition; increment)
//{execute code within curly brackets}

//for (var i = 0; i <= 10; i = i + 1) {
//  console.log("the value of i is " + i);
//}

var myArray = [34, 878, 4, 5, 89, 90, 545, 88, 34, 67, 33];
//myArray[2];
var sum = 0;
$(document).ready(function() {
    for (var i = 0; i < myArray.length; i = i + 1) {
        var myMessage = "The value in myArray at spot " + i + " is " + myArray[i];
        sum = sum + myArray[i];
        console.log(myMessage);
        $("body").append("<div>" + myMessage + "<div>");
    }
    $("body").append("<div>The Total is" + sum + "<div>");
}
);


var myArray = [34, 878, 4, 5, 89, 90, 545, 88, 34, 67, 33];
//myArray[2];
var product = myArray[0];
$(document).ready(function() {
    for (var i = 1; i < myArray.length; i = i + 1) {
        product = product * myArray[i];
    }
    $("body").append("<div>The product is " + product + "<div>");
}
);






var car = {
    type: 'SUV',
    price: 45000,
    milage: 24,
    colour: 'magenta',
    fuelType: 'electric',
    source: 'images/car1.jpg'
};

for (var key in car) {
    $("body").append("<div> key name is " + key + " and value is " + car[key] + "</div>");
}
*/


$(".info").each(function() {
  console.log("The text of this div is " + $(this).text() );
});
