// our program
// primitive types
// in quotes is a string
var myString = "a string";
// no quotes number is a number
var muNumber = 2;
var myVar = '2';
// no quotes true or false is boolean
var myBoolean = false;
var myVar2 = 'true';

// array
var myArray = [];

var myFullArray = ['Calen','Nicole','Evan'];

console.log(myFullArray[0]);
console.log(myFullArray[2]);
console.log('myFullArray 2nd value = '+myFullArray[1]);

var myMixArray = [3,'David',false];
myMixArray.push('another value');
console.log('myMixArray values: '+myMixArray);

//type, price, milage, colour, fuelType. src
var car = {
  type : 'SUV',
  price : 45000,
  milage : 24,
  colour : 'magenta',
  fuelType : 'electric',
  source : 'images/car1.jpg',
  message : function(){
    console.log("a car is useful!");
  }
};

// object name.properties
console.log(car.type);
console.log(car.price);
console.log(car.milage);
console.log(car.colour);
console.log(car.fuelType);
console.log(car.images);
console.log(car.message);


$(document).ready(function(){
  /*$('#carDiv').html("<div id='centerDiv'>");
  $('#carDiv').html('<div>' +car.type+ '</div>');
  $('#carDiv').append("<img src='"+car.source+"'/>");
  $('#carDiv').append("<div>" +car.price+ "</div>");
  $('#carDiv').append("</div>");*/



var myHTML = "<div id='centerDiv'>" +
  '<div>' +car.type+ '</div>' +
  "<img src='"+car.source+"'/>" +
  "<div>" +car.price+ "</div>" +
  "</div>";

  $("#carDiv").html(myHTML);
});

















var uzi = {
  name : 'lil uzi vert',
  adlib : 'yeah',
  ooh : 'yeaah',
  yeah : 'yeaaah',
  source : 'images/LUV.jpg',
  message : function(){
    console.log("LUV Is Rage!");
  }
};

var myUzi = "<div id='centerDiv'>" +
  '<div>' +uzi.name+ '</div>' +
  "<img src='"+uzi.source+"'/>" +
  "<div>" +uzi.adlib+ "</div>" +
  "<div>" +uzi.ooh+ "</div>" +
  "<div>" +uzi.yeah+ "</div>" +
  "</div>";

  $("#uziDiv").html(myUzi);

  var yachty = {
    name : 'lil boat',
    adlib : 'yeah',
    ooh : 'boop boop',
    yeah : 'ayo',
    source : 'images/boat.jpg',
    message : function(){
      console.log("Summer Songs!");
    }
  };

  var myBoat = "<div id='centerDiv'>" +
    '<div>' +yachty.name+ '</div>' +
    "<img src='"+yachty.source+"'/>" +
    "<div>" +yachty.adlib+ "</div>" +
    "<div>" +yachty.ooh+ "</div>" +
    "<div>" +yachty.yeah+ "</div>" +
    "</div>";

    $("#lilBoat").html(myBoat);
