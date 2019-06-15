// ------------------ Back-end logic ---------------------
var arrayDecimals =  [ 1000, 900, 500, 400, 100,   90,   50,  40,   10,  9,   5,  4,    1];
var arrayRomans =    [ 'M',  'CM','D', 'CD', 'C', 'XC', 'L', 'XL', 'X','IX', 'V','IV', 'I']


function decimalToRoman(number){
  var romanNumber = '';
  for (var i = 0; i < arrayDecimals.length; i++) {
    while(number % arrayDecimals[i] < number) { // use modulus of
      romanNumber = romanNumber + arrayRomans[i];
      number = number - arrayDecimals[i];
    }
  }
  return romanNumber;
}

// In this way, we can do same work with minus operation.
// Check the condition statement of while loop.
// It is greatly painful if you use if condition rather than while condition loop.

// function decimalToRoman(number){
//   var romanNumber = '';
//   for (var i = 0; i < arrayDecimals.length; i++) {
//     while(number - arrayDecimals[i] >= 0) { // use minus of
//       romanNumber = romanNumber + arrayRomans[i];
//       number = number - arrayDecimals[i];
//     }
//   }
//   return romanNumber;
// }

// ------------------ Front-end logic --------------------
$(document).ready(function() {
  $("form#Roman").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = decimalToRoman(number);
    $("#result").text(result);
  });
});
