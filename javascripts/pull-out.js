(function() {
  var slideToggle;
  slideToggle = function() {
    $(".slide").toggleClass("in");
  };
  $(function() {
    return $(".slideTab").on('click', slideToggle);
  });
}).call(this);