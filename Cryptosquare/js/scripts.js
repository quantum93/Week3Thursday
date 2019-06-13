// --------------------- Back-end Logic -------------------------

var encrypt = function(sentence) {
    // var lowerSentence = sentence.toLowerCase();
    // var wordSentence = lowerSentence.replace(/[\W\s]/gi, '');
    var string = sentence.toLowerCase().replace(/[\W\s]/gi, '');
    var stringLength = sentence.length
    var squareRow = Math.ceil(Math.sqrt(stringLength))
    var squareColumn = Math.floor(Math.sqrt(stringLength))
    console.log(stringLength);
    console.log(squareRow);
    console.log(squareColumn);
    var stringArray = Create2DArray(squareRow, squareColumn);
    console.log(stringArray);
    return string
};


// To create a 2D array in javaScript we can create an Array first and then add
//Arrays as it's elements. This method will return a 2D array with the given
//number of rows and columns.
//
function Create2DArray(rows,columns) {
   var x = new Array(rows);
   for (var i = 0; i < rows; i++) {
       x[i] = new Array(columns);
   }
   return x;
}
// to create an Array use this method as below.

// var array = Create2DArray(10,20);


// --------------------- Front-end Logic -------------------------
$(document).ready(function() {
  $("form#crypto-sentence").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = encrypt(sentence);
    $("#result").text(result);
  });
});
