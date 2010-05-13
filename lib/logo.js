Raphael.fn.logo = function(center) {
  var logo = this.set();

  var background = this.circle(center.x, center.y, 95).attr({
    fill: '#fff'
  });

  var self = this;
  var eight = (function() {
    var width = 60;
    var height = 90;
    var corner = 12;

    return self.path(
      "M" + ((center.x - width / 2) + corner) + " " + (center.y) +
      "L" + ((center.x - width / 2)) + " " + (center.y - corner) +
      "L" + ((center.x - width / 2)) + " " + ((center.y - height / 2) + corner) +
      "L" + ((center.x - width / 2) + corner) + " " + ((center.y - height / 2)) +
      "L" + ((center.x + width / 2) - corner) + " " + ((center.y - height / 2)) +
      "L" + ((center.x + width / 2)) + " " + ((center.y - height / 2) + corner) +
      "L" + ((center.x + width / 2)) + " " + (center.y - corner) +
      "L" + ((center.x + width / 2) - corner) + " " + (center.y) +
      "L" + ((center.x - width / 2) + corner) + " " + (center.y) +

      "L" + ((center.x - width / 2)) + " " + (center.y + corner) +
      "L" + ((center.x - width / 2)) + " " + ((center.y + height / 2) - corner) +
      "L" + ((center.x - width / 2) + corner) + " " + ((center.y + height / 2)) +
      "L" + ((center.x + width / 2) - corner) + " " + ((center.y + height / 2)) +
      "L" + ((center.x + width / 2)) + " " + ((center.y + height / 2) - corner) +
      "L" + ((center.x + width / 2)) + " " + (center.y + corner) +
      "L" + ((center.x + width / 2) - corner) + " " + (center.y)
      ).attr({
      stroke: '#000',
      'stroke-width': 10
    });
  })();

  logo.push(background, eight);

  return logo;
};
