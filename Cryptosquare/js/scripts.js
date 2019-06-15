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
    var string1Darray = [];
    for (var i = 0; i < string.length; i++) {
      string1Darray[i] = string.charAt(i);
    }
    console.log(string1Darray.length)

    var string2Darray = Create2DArray(squareRow, squareColumn);

    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 8; j++) {
        string2Darray[i][j] = string1Darray[j]
        console.log(string2Darray[i][j])
      }
    }
    return string2Darray
};

// To create a 2D array in javaScript we can create an Array first and then add
//Arrays as it's elements. This method will return a 2D array with the given
//number of rows and columns.
// To create an Array use this method as below.
// var array = Create2DArray(10,20);
function Create2DArray(rows,columns) {
   var x = new Array(rows);
   for (var i = 0; i < rows; i++) {
       x[i] = new Array(columns);
   }
   return x;
}

// --------------------- Front-end Logic -------------------------
$(document).ready(function() {
  $("form#crypto-sentence").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = encrypt(sentence);
    $("#result").text(result);
  });
});
