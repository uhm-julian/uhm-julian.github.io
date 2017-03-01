// () means execute this function
// double slash means ignore this list-unstyled

/*
everything between these lines is ignored


*/
//alert("this is a pop up");

console.log("This is for debugging messages");

var myVar;

// in quotes is a string
var myAnotherVar = 'here is my another var';
console.log("my Another var");

//alert(myAnotherVar);

//concatenation

var myName = 'Kush Papi';
var myLastName = ' Dirty Sprite Lord';
//alert('my name is '+myName + 'and my last name is'+myLastName);
// {} code block, everything inside of code block will be executed
function sayMyName(){
console.log("your name is " +myName);
}
function sayMyName2(name){
console.log("your name is " +name);
}

sayMyName();
sayMyName2('Julian');
sayMyName2('ayo boys');
/*
when the document is ready, jQuery gets the element with id myDiv and calls the html function
html function will replace the html within the element
*/


$(document).ready(function(){
  //alert('the document is ready');
  $('.myDiv').html('hey i was able to change the DOM');
  $('.myDiv').append(' <br>and add something more!');
});
