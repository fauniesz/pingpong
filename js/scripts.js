var pong = function(inputN) {
   var result = [];
   for (var i = 0; i <= inputN; i++ ) {
     if (i % 3 === 0 && i % 15 !== 0) {
       result.push("PING");
     } else if (i % 5 === 0 && i % 15 !== 0) {
       result.push("PONG");
     } else if (i % 15 === 0) {
       result.push("PING-PONG");
     } else {
       result.push(i);
     }
 }
 return result;
};
$(function() {
 $(".pong" ).submit(function(event) {
   event.preventDefault();
   $("ul#showOutput").empty();
   var inputN = parseInt($("#inputNumber").val());
   var output = pong(inputN);
   for (var i = 1; i <= inputN; i++) {
    $("#showOutput").append("<li>" + output[i] + "</li>");
  }
  });
 });
