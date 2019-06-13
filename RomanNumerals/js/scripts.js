// ------------------ Back-end logic ---------------------
var values =  [ 1,   4,    5,   9,   10,  50,  100, 500, 1000];
var symbols = ['I', 'IV', 'V', 'IX', 'X', 'L', 'C', 'D', 'M']

var RomanOnes = function(ones) {
  if (ones < 4) {
    return symbols[0].repeat(ones);
  }
  else if (ones === 4) {
    return symbols[1];
  }
  else if (ones === 5) {
    return symbols[2];
  }
  else if (ones > 5 && ones < 9) {
    return symbols[2] + symbols[0].repeat(ones - 5);
  }
  else if (ones === 9) {
    return symbols[3];
  }
  else if (ones === 10) {
    return symbols[4];
  }
};

// ------------------ Front-end logic --------------------
$(document).ready(function() {
  $("form#Roman").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var emptyIndex = [];
    var numberIndex = emptyIndex.push(number.slice(-1,1));
    console.log(numberIndex);
    console.log(typeof numberIndex);
    if (numberIndex === '1') {
      var ones = parseInt(numberIndex[0]);
    }
    else if (numberIndex === '2') {
      var tens = numberIndex[0];
      var ones = numberIndex[1];
    }
    else if (numberIndex === '3') {
      var hundreds = numberIndex[0];
      var tens = numberIndex[1];
      var ones = numberIndex[2];
    }
    else if (numberIndex === '4') {
      var thousands = numberIndex[0];
      var hundreds = numberIndex[1];
      var tens = numberIndex[2];
      var ones = numberIndex[3];
    }

    var resultOnes = RomanOnes(ones);
    $("#result").text(resultOnes);
  });
});

// $("#result").text(resultThousands + resultHundreds + resultTens + resultOnes);
// var resultTens = RomanTens(tens);
// var resultHundreds = RomanHundreds(hundreds);
// var resultThousands = RomanThousands(thousands);


// var RomanTens = function(tens) {
//   if (tens < 4) {
//     return symbols[0].repeat(tens);
//   }
//   else if (tens === 4) {
//     return symbols[1];
//   }
//   else if (tens === 5) {
//     return symbols[2];
//   }
//   else if (tens > 5 && tens < 9) {
//     return symbols[2] + symbols[0].repeat(tens - 5);
//   }
//   else if (tens === 9) {
//     return symbols[3];
//   }
//   else if (tens === 10) {
//     return symbols[4];
//   }
// };

// var RomanHundreds = function(hundreds) {
//   if (hundreds < 4) {
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
