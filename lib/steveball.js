jQuery(function($) {
  var center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };

  var paper = Raphael(0, 0, window.innerWidth, window.innerHeight);

  var ball = paper.circle(center.x, center.y, 200).attr({
    stroke: '#fff',
    fill: '#000'
  });

  var highlight = paper.ellipse(center.x + 110, center.y - 120, 40, 20).rotate(42).attr({
    'stroke-width': 0,
    fill: '#fff',
    'fill-opacity': 0.7
  }).blur(5);

//  paper.logo(center);
  paper.answerWindow(center);
});
