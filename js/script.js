window.onload = function() {
  var circleBounceAnimation = function circleBounce() {
    var keyframes = [
        {r: 111, offset: 0},
				{r: 60, offset: 0.1},
        {r: 120, offset: 0.2},
        {r: 85, offset: 0.4},
        {r: 115, offset: 0.6},
        {r: 100, offset: 0.8},
        {r: 111, offset: 1}
    ];
    var timing = {
        duration: 1000,
        iterations: 1,
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
    };
		var elem = document.querySelector('#ellipse circle');

    return new Animation(new KeyframeEffect(elem, keyframes, timing), elem.ownerDocument.timeline);
  }();

  var gumStretchAnimation = function gumStretch() {
    var keyframes = [
				{transform: 'translate(57.713px, 55.98px) scaleY(1) translate(-57.713px, -55.98px)', offset: 0},
				{transform: 'translate(57.713px, 55.98px) scaleY(3.75) translate(-57.713px, -55.98px)', offset: 0.3},
				{transform: 'translate(57.713px, 55.98px) scaleY(3.80) translate(-57.713px, -55.98px)', offset: 0.35},
				{transform: 'translate(57.713px, 55.98px) scaleY(3.85) translate(-57.713px, -55.98px)', offset: 0.37},
				{transform: 'translate(57.713px, 55.98px) scaleY(3.90) translate(-57.713px, -55.98px)', offset: 0.39},
				{transform: 'translate(57.713px, 55.98px) scaleY(3.95) translate(-57.713px, -55.98px)', offset: 0.395},
				{transform: 'translate(57.713px, 55.98px) scaleY(4) translate(-57.713px, -55.98px)', offset: 0.4},
				{transform: 'translate(57.713px, 55.98px) scaleY(0.85) translate(-57.713px, -55.98px)', offset: 0.5},
				{transform: 'translate(57.713px, 55.98px) scaleY(1.05) translate(-57.713px, -55.98px)', offset: 0.65},
				{transform: 'translate(57.713px, 55.98px) scaleY(0.95) translate(-57.713px, -55.98px)', offset: 0.75},
				{transform: 'translate(57.713px, 55.98px) scaleY(1) translate(-57.713px, -55.98px)', offset: 1}
    ];
    var timing = {
        duration: 900,
        iterations: 1,
				easing: 'cubic-bezier(.65,.44,.95,.44)'
    };
		var elem = document.querySelector('#shape1');

    return new Animation(new KeyframeEffect(elem, keyframes, timing), elem.ownerDocument.timeline);
  }();

	var thingAnimation = function thing() {
		var keyframes = [
				{fill: 'rgba(23,16,44,0.2)', stroke: 'rgb(23,16,44)', 'stroke-width': 8, 'stroke-dasharray': 10, 'stroke-dashoffset': 0, offset: 0},
				{fill: 'rgba(23,16,44,0.2)', stroke: 'rgb(23,16,44)', 'stroke-width': 8, 'stroke-dasharray': 10, 'stroke-dashoffset': 500, offset: 1}
    ];
    var timing = {
        duration: 10000,
        iterations: Infinity
    };
		var elem = document.querySelector('#shape2');

    return new Animation(new KeyframeEffect(elem, keyframes, timing), elem.ownerDocument.timeline);
	}();

  document.querySelector('#ellipse').onmouseover = function() {
    circleBounceAnimation.play();
  };

  document.querySelector('#shape1').onmouseover = function() {
    gumStretchAnimation.play();
  };

	document.querySelector('#shape2').onmouseover = function() {
		thingAnimation.play();
	};

	document.querySelector('#shape2').onmouseout = function() {
		thingAnimation.cancel();
	};
};
