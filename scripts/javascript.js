var  mn = $(".settings");
mns = "settings-scrolled";
hdr = $('nav').height();


$( document ).ready(function() {

    if( window.canRunAds === undefined ){
        $("#adblockmessage").slideDown();
        $(".advertisement").slideUp();
        // alert("ad block detected");
    }else{
        $("#adblockmessage").slideUp();
        // alert("no ad block");
    }

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



function wrapText(elementID, openTag, closeTag) {
    var textArea = $('#' + elementID);
    var len = textArea.val().length;
    var start = textArea[0].selectionStart;
    var end = textArea[0].selectionEnd;
    var selectedText = textArea.val().substring(start, end);
    var replacement = openTag + selectedText + closeTag;
    textArea.val(textArea.val().substring(0, start) + replacement + textArea.val().substring(end, len));
}
