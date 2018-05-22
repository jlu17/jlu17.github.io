$(document).ready(function(){

  $("#portfolio").hide();
  $("#about").css("background-color", "#669999");
  $("#work").css("background-color", "#E7E7E7");

  $("#about").click(function() {
    $("#portfolio").fadeOut(400);
    $("#resume").fadeIn(400);

    $("#about").css("background-color", "#669999");
    $("#work").css("background-color", "#E7E7E7");
  });

  $("#work").click(function() {
    $("#resume").fadeOut(400);
    $("#portfolio").fadeIn(400);

    $("#about").css("background-color", "#E7E7E7");
    $("#work").css("background-color", "#669999");
  });
});
