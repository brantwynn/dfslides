$(document).ready(function() {
  // Set up impress.js
  if ("ontouchstart" in document.documentElement) {
    $(".hint").html("<p>Tap on the left or right to navigate</p>");
  }
  imps.init();
  impress().init();
});
