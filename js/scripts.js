// business logic
var pong = function(lastNumber) {
  var result = [];
  for (var c = 1; c <= lastNumber; c++) {
    if (c % 15 === 0) {
      result.push("PING-PONG");
    } else if (c % 5 === 0) {
      result.push("PONG");
    } else if (c % 3 === 0) {
      result.push("PING");
    } else {
      result.push(c);
    }
  }
  return result;
};

// jQuery user interface logic here.
$(function() {
  $(".pong").submit(function(event) {
    event.preventDefault();
    $("#see-output").show();
    $("ul#show-output").empty();
    var numberSubmitted = parseInt($("#input-number").val());
    var output = pong(numberSubmitted);
    var lastPosition = numberSubmitted - 1;
    for (var c = 0; c <= lastPosition; c++) {
      $("#show-output").append("<li>" + output[c] + "</li>");
    }
  });

  $("#about-the-creator").click(function() {
    $("#links").toggle();
  });
});
