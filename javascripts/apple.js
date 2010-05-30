Raphael.fn.apple = function(cx, cy) {
  var fullDimensions = {
    x: 69,
    y: 84
  };

  var bodyDimensions = {
    x: 69,
    y: 64
  };

  var center = {
    x: (bodyDimensions.x / 2) + (fullDimensions.x - bodyDimensions.x),
    y: (bodyDimensions.y / 2) + (fullDimensions.y - bodyDimensions.y)
  };

  var body = this.path("M60.7344 24.8653 C60.6337 14.2813 69.3741 9.1973 69.7686 8.9512 C64.8536 1.7627 57.2032 0.7784 54.4776 0.6592 C47.9649 0 41.7706 4.4942 38.4698 4.4942 C35.17 4.4942 30.0694 0.7588 24.6719 0.8614 C17.5704 0.9629 11.0303 4.9864 7.3711 11.3389 C0 24.1377 5.48731 43.0899 12.6719 53.4698 C16.1836 58.544 20.3692 64.2559 25.8711 64.0498 C31.168 63.8428 33.17 60.627 39.5684 60.627 C45.9688 60.627 47.7706 64.0498 53.3701 63.9434 C59.0703 63.8428 62.6797 58.7686 66.167 53.6758 C70.2002 47.7823 71.8585 42.0772 71.958 41.7823 C71.833 41.7266 60.8467 37.5157 60.7344 24.8653 ").translate(-3.87305, 19.9443)
  var stem = this.path("M13.043 13.3516 C15.9649 9.81448 17.9287 4.89844 17.3916 0 C13.1865 0.170898 8.0938 2.80273 5.0742 6.33594 C2.3692 9.46582 0 14.4697 0.6406 19.2705 C5.3291 19.6328 10.1211 16.8848 13.043 13.3516 ").translate(33.2949, 0.386719)
  var apple = this.set([body, stem]);
  apple.attr({fill: "#a7abac", 'fill-rule': "nonzero", stroke: "none", 'stroke-width': 1});

  return apple.translate(cx - center.x, cy - center.y);
};
