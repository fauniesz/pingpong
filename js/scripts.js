// business logic
var pong = function(inputN) {
  var result = [];
  for (var i = 0; i <= inputN; i++) {
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

// jQuery user interface logic here.
$(function() {
  $(".pong").submit(function(event) {
  $("#see-output").show();
    event.preventDefault();
    $("ul#show-output").empty();
    var inputN = parseInt($("#inputNumber").val());
    var output = pong(inputN);
    for (var i = 1; i <= inputN; i++) {
      $("#show-output").append("<li>" + output[i] + "</li>");
    }
  });

  $("#about-the-creator").click(function() {
    $("#links").toggle();
  });
});
