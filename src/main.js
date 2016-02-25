$(document).foundation();
$(".close").click(function(){
  $("form").addClass("fadeOut").one("animationend", function(){
    $(this).removeClass("fadeOut search-bar-open ");
  });
})

$(".show").click(function(){
  // if ($("form").hasClass("fadeOut")) {
  //   $("form").removeClass("fadeOut");
  // }
  $("form").addClass("fadeIn search-bar-open").one("animationend", function(){
    $(this).removeClass("fadeIn");
  });
})