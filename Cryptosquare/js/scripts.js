// --------------------- Back-end Logic -------------------------

var encrypt = function(sentence) {
    var string = sentence.toLowerCase().replace(/[\W\s]/gi, '');
    // 이게 돌아가는 이유는 string.length를 변수로 받으면서 문자로 지정되어도
    // 다음의 sqrt에서 자동으로 숫자로 인식되는 자바스크립트의 유연한 데이터 형식때문이다. 
    // var stringLength = string.length
    // var squareRow = Math.ceil(Math.sqrt(stringLength))
    // var squareColumn = Math.floor(Math.sqrt(stringLength))
    var squareRow = Math.ceil(Math.sqrt(string.length))
    var squareColumn = Math.floor(Math.sqrt(string.length))
    console.log(squareRow)
    console.log(squareColumn)
    console.log(string.length)
    var string1Darray = [];
    for (var i = 0; i < string.length; i++) {
      string1Darray[i] = string.charAt(i);
    }

    var string2Darray = Create2DArray(squareRow, squareColumn);


    return string1Darray
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
