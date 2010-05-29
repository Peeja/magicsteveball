Raphael.fn.logo = function(center) {
  var logo = this.set();

  var background = this.circle(center.x, center.y, 95).attr({
    fill: '#fff'
  });

  var apple = this.apple(center.x, center.y);
  apple.scale(1.2, 1.2, center.x, center.y);
  apple.translate(0, 5);

  logo.push(background, apple);

  return logo;
};
