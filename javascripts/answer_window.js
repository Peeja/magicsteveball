Raphael.fn.answerWindow = function(center, answer, callback) {
  function atanInDegrees(ratio) {
    return Math.atan(ratio) / (2 * Math.PI) * 360;
  }

  // Returns a path description for a triangle
  // which would be circumscribed by a circle
  // at center +(x, y)+ with radius +radius+.
  function triangle_path(x, y, radius) {
    var bottom = {x: x, y: (y + radius)};
    var left = {x: (x - Math.sqrt(3) * radius / 2), y: (y - radius / 2)};
    var right = {x: (x + Math.sqrt(3) * radius / 2), y: (y - radius / 2)};

    return "M" + bottom.x + " " + bottom.y +
           "L" + left.x + " " + left.y +
           "L" + right.x + " " + right.y +
           "z";
  }


  var answerWindow = this.set();

  var outerCircle = this.circle(center.x, center.y, 95).attr({
    fill: atanInDegrees(120 / 110) + '-#AAA-#000'
  });

  var innerCircle = this.circle(center.x, center.y, 85).attr({
    fill: "#000"
  });

  var answerShape = this.path(triangle_path(center.x, center.y, 80)).attr({
    stroke: 'none',
    fill: '#00005B'
  }).scale(0.75, 0.75).animate({
    fill: '#316BC5',
    scale: "1,1"
  }, 3000, "bounce", callback);

  var answerSize = answer.size || 20;
  var answerText = this.text(center.x, center.y, answer.text).attr({
    "font-size": answerSize - 6,
    "font-family": "Helvetica",
    fill: "#00005B"
  });

  $(answerText.node).css("font-variant", "small-caps");

  answerText.animateWith(answerShape, {
    "font-size": answer.size || 20,
    fill: "#bbf"
  }, 3000, "bounce");

  var windowPlastic = this.circle(center.x, center.y, 85).attr({
    fill: atanInDegrees(120 / 110) + '-#000-#AAA',
    "fill-opacity": 0.05
  });

  answerWindow.push(outerCircle, innerCircle, answerShape, answerText, windowPlastic);

  return answerWindow;
};
