jQuery(function($) {
  var center = {
    x: window.innerWidth/2,
    y: window.innerHeight/2
  }

  var paper = Raphael(0, 0, window.innerWidth, window.innerHeight);
  
  var ball = paper.circle(center.x, center.y, 200).attr({
    stroke: '#fff',
    fill: '#000'
  });
  
  // var logo = paper.circle(center.x, center.y, 95).attr({
  //   fill: '#fff'
  // });
  // 
  // (function() {
  //   var width = 60;
  //   var height = 90;
  //   var corner = 12;
  //   
  //   var eight = paper.path(
  //     "M"+((center.x-width/2) + corner)+" "+(center.y)+
  //     "L"+((center.x-width/2))+" "+(center.y - corner)+
  //     "L"+((center.x-width/2))+" "+((center.y-height/2) + corner)+
  //     "L"+((center.x-width/2) + corner)+" "+((center.y-height/2))+
  //     "L"+((center.x+width/2) - corner)+" "+((center.y-height/2))+
  //     "L"+((center.x+width/2))+" "+((center.y-height/2) + corner)+
  //     "L"+((center.x+width/2))+" "+(center.y - corner)+
  //     "L"+((center.x+width/2) - corner)+" "+(center.y)+
  //     "L"+((center.x-width/2) + corner)+" "+(center.y)+
  //     
  //     "L"+((center.x-width/2))+" "+(center.y + corner)+
  //     "L"+((center.x-width/2))+" "+((center.y+height/2) - corner)+
  //     "L"+((center.x-width/2) + corner)+" "+((center.y+height/2))+
  //     "L"+((center.x+width/2) - corner)+" "+((center.y+height/2))+
  //     "L"+((center.x+width/2))+" "+((center.y+height/2) - corner)+
  //     "L"+((center.x+width/2))+" "+(center.y + corner)+
  //     "L"+((center.x+width/2) - corner)+" "+(center.y)
  //   ).attr({
  //     stroke: '#000',
  //     'stroke-width': 10
  //   });
  // })();
  
  function atanInDegrees(ratio) {
    return Math.atan(ratio) / (2*Math.PI) * 360;
  }
  
  paper.ellipse(center.x + 110, center.y - 120, 40, 20).rotate(42).attr({
    'stroke-width': 0,
    fill: '#fff',
    'fill-opacity': 0.7
  }).blur(5);
  
  paper.circle(center.x, center.y, 95).attr({
    fill: atanInDegrees(120/110)+'-#AAA-#000'
  });
  
  paper.circle(center.x, center.y, 85).attr({
    fill: "#000"
  });

  // Returns a path description for a triangle
  // which would be circumscribed by a circle
  // at center +(x, y)+ with radius +radius+.
  function triangle_path(x, y, radius) {
    var bottom = {x: x, y: (y + radius)};
    var left   = {x: (x - Math.sqrt(3)*radius/2), y: (y - radius/2)};
    var right  = {x: (x + Math.sqrt(3)*radius/2), y: (y - radius/2)};
    
    return "M"+bottom.x+" "+bottom.y+
           "L"+left.x+" "+left.y+
           "L"+right.x+" "+right.y+
           "z";
  }
  
  var answerShape = paper.path(triangle_path(center.x, center.y, 80)).attr({
    stroke: 'none',
    fill: '#00005B'
  }).scale(0.75, 0.75).animate({
    fill: '#316BC5',
    scale: "1,1"
  }, 3000, "bounce");
  
  var answerText = paper.text(center.x, center.y, "As I see\nit, yes").attr({
    "font-size": 14,
    fill: "#00005B"
  }).animateWith(answerShape, {
    "font-size": 20,
    fill: "#bbf"
  }, 3000, "bounce");
    
  paper.circle(center.x, center.y, 85).attr({
    fill: atanInDegrees(120/110)+'-#000-#AAA',
    "fill-opacity": 0.05
  });
});