jQuery(function($) {
  var center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };

  var paper = Raphael(0, 0, window.innerWidth, window.innerHeight);

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
  $(document).click(function() {
    if (!answerWindow) {
      var answerIndex = Math.floor(Math.random() * Answers.length);
      var answer = Answers[answerIndex].text;
      answerWindow = paper.answerWindow(center, answer);
    }
    else {
      answerWindow.remove();
      answerWindow = null;
    }
  });
});
