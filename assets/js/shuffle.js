// https://coderwall.com/p/r3zn_g/shuffle-child-elements-with-jquery
jQuery.fn.shuffleChildren = function () {
  var p = this[0];
  for (var i = p.children.length; i >= 0; i--) {
    p.appendChild(p.children[(Math.random() * i) | 0]);
  }
};

$(document).ready(function () {
  $("#images").shuffleChildren();
  console.log("shuffled");
});
