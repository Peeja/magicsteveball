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
  
  var logo = paper.circle(center.x, center.y, 95).attr({
    fill: '#fff'
  });
  
  (function() {
    var width = 60;
    var height = 90;
    var corner = 12;
    
    var eight = paper.path(
      "M"+((center.x-width/2) + corner)+" "+(center.y)+
      "L"+((center.x-width/2))+" "+(center.y - corner)+
      "L"+((center.x-width/2))+" "+((center.y-height/2) + corner)+
      "L"+((center.x-width/2) + corner)+" "+((center.y-height/2))+
      "L"+((center.x+width/2) - corner)+" "+((center.y-height/2))+
      "L"+((center.x+width/2))+" "+((center.y-height/2) + corner)+
      "L"+((center.x+width/2))+" "+(center.y - corner)+
      "L"+((center.x+width/2) - corner)+" "+(center.y)+
      "L"+((center.x-width/2) + corner)+" "+(center.y)+
      
      "L"+((center.x-width/2))+" "+(center.y + corner)+
      "L"+((center.x-width/2))+" "+((center.y+height/2) - corner)+
      "L"+((center.x-width/2) + corner)+" "+((center.y+height/2))+
      "L"+((center.x+width/2) - corner)+" "+((center.y+height/2))+
      "L"+((center.x+width/2))+" "+((center.y+height/2) - corner)+
      "L"+((center.x+width/2))+" "+(center.y + corner)+
      "L"+((center.x+width/2) - corner)+" "+(center.y)+
      ""
    ).attr({
      stroke: '#000',
      'stroke-width': 10
    });
  })();
  
  paper.ellipse(center.x + 110, center.y - 120, 40, 20).rotate(42).attr({
    'stroke-width': 0,
    fill: '#fff',
    'fill-opacity': 0.7
  });
});