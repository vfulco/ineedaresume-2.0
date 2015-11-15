var  mn = $(".settings");
mns = "settings-scrolled";
hdr = $('nav').height();


$( document ).ready(function() {
    
});


$(window).scroll(function() {
  if( $(this).scrollTop() > 99 ) {
    $(".settings").addClass("settings-scrolled");
  } else {
    $(".settings").removeClass("settings-scrolled");
  }
});
