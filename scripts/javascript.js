var  mn = $(".settings");
mns = "settings-scrolled";
hdr = $('nav').height();


$( document ).ready(function() {
    $(".nav-spacer").hide();

    $("#menu-btn").click(function(){
        $("#navigation-links").slideToggle(550);
        $("#menu-btn").toggleClass("ion-navicon");
        $("#menu-btn").toggleClass("ion-ios-close-empty");
        $("#menu-lightbox").fadeToggle(300);
    });
    $("#navigation-links").click(function(){
        if ($(window).width() < 800) {
            $("#navigation-links").slideUp(200);
            $("#menu-btn").removeClass("ion-ios-close-empty");
            $("#menu-btn").addClass("ion-navicon");
            $("#menu-lightbox").fadeOut(200);
        }else{
            return;
        }
    });


});


$(window).scroll(function() {
    if( $(this).scrollTop() > 50 ) {
      $("#navigation-links").addClass("nav-scrolled");
      $(".nav-spacer").show();
    } else {
      $("#navigation-links").removeClass("nav-scrolled");
      $(".nav-spacer").hide();
    }
    if( $(this).scrollTop() > 50 ) {
        $(".settings").addClass("settings-scrolled");
    } else {
        $(".settings").removeClass("settings-scrolled");
    }
});

window.onresize = function() {
    if ($(window).width() > 800) {
        $("#navigation-links").slideDown(200);
        $("#menu-lightbox").fadeOut(200);
    }else{
        $("#navigation-links").slideUp(200);
        $("#menu-btn").removeClass("ion-ios-close-empty");
        $("#menu-btn").addClass("ion-navicon");
    }
}
