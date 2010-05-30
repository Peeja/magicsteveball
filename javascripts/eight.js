Raphael.fn.eight = function(center) {
  var width = 60;
  var height = 90;
  var corner = 12;

  return this.path(
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
};
