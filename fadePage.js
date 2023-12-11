$(function () {
  var $this = $(".hide-page");
  window.setTimeout(function () {
    $this.addClass("show-page");
  }, 50); //<-- Delay in milliseconds
});
