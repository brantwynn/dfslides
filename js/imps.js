/**
 * imps.js
 *
 * imps.js provides imps (impress.js shortcuts) to help create presentations
 * without calculating your own math. Combine simple css classes with
 * impress' .step class to create div data-* attributes on imps.init().
 *
 */
var imps = {
  w: $(window).width(),
  h: $(window).height(),
  init: function() {
    $(".step").each(function() {
      imps.place($(this));
      imps.clean($(this));
    });
  },
  place: function($step) {
    x = imps.prev($step, 'data-x');
    y = imps.prev($step, 'data-y');
    if ($step.hasClass('imp-y')) $step.attr('data-y', y-imps.h);
    if ($step.hasClass('imp+y')) $step.attr('data-y', y+imps.h);
    if ($step.hasClass('imp+x')) $step.attr('data-x', x+imps.w);
    if ($step.hasClass('imp-x')) $step.attr('data-x', x-imps.w);
  },
  prev: function($step, $data) {
    return ($step.prev().attr($data)) ? parseInt($step.prev().attr($data)) : 0;
  },
  clean: function($step) {
    a = ['data-x', 'data-y'];
    a.forEach(function(e) {
      n = ($step.attr(e)) ? $step.attr(e) : $step.prev().attr(e);
      $step.attr(e, parseInt(n));
    });
  }
}
