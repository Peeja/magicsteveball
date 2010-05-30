jQuery(function($) {
  $("#steveball").css({
    width: 410,
    height: 410,
    'margin-top': (window.innerHeight - 410) / 2
  });

  var center = {
    x: 205,
    y: 205
  };

  var paper = Raphael("steveball");

  var ball = paper.circle(center.x, center.y, 200).attr({
    fill: '42-#000-#3B3B3B'
  });

  var highlight = paper.ellipse(center.x + 110, center.y - 120, 40, 20).rotate(42).attr({
    'stroke-width': 0,
    fill: '#fff',
    'fill-opacity': 0.7
  }).blur(5);

  paper.logo(center);

  var answerWindow = null;
  var answerIndex = 0;
  $("#steveball").click(function() {
    if (!answerWindow) {
      var answer = Answers[answerIndex++];
      answerWindow = paper.answerWindow(center, answer, function() {
        $("<a>")
          .addClass("source")
          .text("[source]")
          .attr("href", answer.source)
          .hide()
          .appendTo("#steveball")
          .fadeIn(300);
      });
    }
    else {
      answerWindow.remove();
      answerWindow = null;
      $("a.source").remove();
    }
  });


  $("#about_tab").click(function() {
    if ($("#about").css("right") == "0px") {
      var width = $("#about_contents").width() +
                  parseInt($("#about_contents").css("padding-left")) +
                  parseInt($("#about_contents").css("padding-right"));
      console.log(width);
      $("#about").animate({right: width}, 500);
    }
    else
      $("#about").animate({right: 0}, 500);
  });
});
