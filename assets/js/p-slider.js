$(document).ready(function() {
  $(function() {
    $("#slideshow").cycle({
      fx: "scrollHorz",
      speed: "fast",
      timeout: 0,
      pager: "#nav",
      after: removePlanArrow,
      pagerAnchorBuilder: function(idx, slide) {
        return "#nav li:eq(" + idx + ") ";
      }
    });

    $("#tab-employee #prev").click(function() {
      $("#slideshow").cycle("prev");
    });

    $("#tab-employee #next").click(function() {
      $("#slideshow").cycle("next");
    });

    function removePlanArrow(curr, next, opts) {
      var index = opts.currSlide;
      $("#tab-employee #prev")[index == 0 ? "fadeOut" : "fadeIn"]();
      $("#tab-employee #next")[
        index == opts.slideCount - 1 ? "fadeOut" : "fadeIn"
      ]();
    }

    //MANAGER TAB CYCLE
    $("#slideshow2").cycle({
      fx: "scrollHorz",
      speed: "fast",
      timeout: 0,
      pager: "#nav2",
      after: arrowFunction,
      pagerAnchorBuilder: function(idx, slide) {
        return "#nav2 li:eq(" + idx + ") ";
      }
    });

    $("#tab-manager #prev2").click(function() {
      $("#slideshow2").cycle("prev");
    });

    $("#tab-manager #next2").click(function() {
      $("#slideshow2").cycle("next");
    });

    function arrowFunction(curr, next, opts) {
      var index = opts.currSlide;
      $("#tab-manager #prev2")[index == 0 ? "fadeOut" : "fadeIn"]();
      $("#tab-manager #next2")[
        index == opts.slideCount - 1 ? "fadeOut" : "fadeIn"
      ]();
    }
  });
});