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

// var RomanOnes = function(ones) {
//   if (ones === 0) {
//     return
//   }
//   else if (ones < 4 && ones > 0) {
//     return symbols[0].repeat(ones);
//   }
//   else if (ones === 4) {
//     return symbols[1];
//   }
//   else if (ones === 5) {
//     return symbols[2];
//   }
//   else if (ones > 5 && ones < 9) {
//     return symbols[2] + symbols[0].repeat(ones - 5);
//   }
//   else if (ones === 9) {
//     return symbols[3];
//   }
// };
//
// var RomanTens = function(tens) {
//   if (tens === 1) {
//     return symbols[4];
//   }
//   else if (tens === 2) {
//     return symbols[4].repeat(tens);
//   }
//   else if (tens === 3) {
//     return symbols[4].repeat(tens);
//   }
//   else if (tens === 4) {
//     return symbols[2];
//   }
//   else if (tens === 5) {
//     return symbols[2] + symbols[0].repeat(tens - 5);
//   }
//   else if (tens === 6) {
//     return symbols[3];
//   }
//   else if (tens === 7) {
//     return symbols[3];
//   }
//   else if (tens === 8) {
//     return symbols[3];
//   }
//   else if (tens === 9) {
//     return symbols[3];
//   }
// };
//
// var RomanHundreds = function(hundreds) {
//   if (hundreds === 100) {
//     return symbols[4];
//   }
//   else if (hundreds < 4) {
//     return symbols[0].repeat(hundreds);
//   }
//   else if (hundreds === 4) {
//     return symbols[1];
//   }
//   else if (hundreds === 5) {
//     return symbols[2];
//   }
//   else if (hundreds > 5 && hundreds < 9) {
//     return symbols[2] + symbols[0].repeat(hundreds - 5);
//   }
//   else if (hundreds === 9) {
//     return symbols[3];
//   }
//   else if (hundreds === 10) {
//     return symbols[4];
//   }
//   else {
//     return;
//   }
// };
//
// var RomanThousands = function(thousands) {
//   if (thousands < 4) {
//     return symbols[0].repeat(thousands);
//   }
//   else if (thousands === 4) {
//     return symbols[1];
//   }
//   else if (thousands === 5) {
//     return symbols[2];
//   }
//   else if (thousands > 5 && thousands < 9) {
//     return symbols[2] + symbols[0].repeat(thousands - 5);
//   }
//   else if (thousands === 9) {
//     return symbols[3];
//   }
//   else if (thousands === 10) {
//     return symbols[4];
//   }
//   else {
//     return;
//   }
// };
    //
    // var numberIndex = number.split("");
    // if (numberIndex.length === 1) {
    //   var ones = parseInt(numberIndex[0]);
    // }
    // else if (numberIndex.length === 2) {
    //   var tens = numberIndex[0];
    //   var ones = numberIndex[1];
    // }
    // else if (numberIndex.length === 3) {
    //   var hundreds = numberIndex[0];
    //   var tens = numberIndex[1];
    //   var ones = numberIndex[2];
    // }
    // else if (numberIndex.length === 4) {
    //   var thousands = numberIndex[0];
    //   var hundreds = numberIndex[1];
    //   var tens = numberIndex[2];
    //   var ones = numberIndex[3];
    // }
// var rank = function (number) {
//
// }
// $("#result").text(resultThousands + resultHundreds + resultTens + resultOnes);
// var resultTens = RomanTens(tens);
// var resultHundreds = RomanHundreds(hundreds);
// var resultThousands = RomanThousands(thousands);
