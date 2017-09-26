//resizing header to match the window size
function setHeight() {
   $windowHeight = $(window).innerHeight();
  $("header").css("min-height", $windowHeight);
};
setHeight();

//open and close menu

$(".hamburger-icon").click(function() {
  $menu = $("nav ul");
  if($menu.is(":hidden")) {
    $(this).children().attr("src", "images/icons/close-menu.png");
    $menu.slideDown();
  } else {
    $(this).children().attr("src", "images/icons/open-menu.png");
    $menu.slideUp();
  }
});  
  
