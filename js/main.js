﻿   $(document).on("pjax:complete",function(){
    hljs.initHighlighting();
   });
   $("a.blog-button").click(function() {
        currentWidth = $(".panel-cover").width();
        if (currentWidth < 2000) {
            $(".panel-cover").addClass("panel-cover--collapsed")
        } else {
            $(".panel-cover").css("max-width", currentWidth);
            $(".panel-cover").animate({
                "max-width": "320px",
                "width": "22%"
            },
            400, swing = "swing");
        }
        $.getScript("/js/main.js");
    });
    $("a.menu").click(function() {
        currentWidth = $(".panel-cover").width();
        if (currentWidth < 2000) {
            $(".panel-cover").addClass("panel-cover--collapsed")
        } else {
            $(".panel-cover").css("max-width", currentWidth);
            $(".panel-cover").animate({
                "max-width": "320px",
                "width": "22%"
            },
            400, swing = "swing");
        }
        Prism.highlightAll();
    });
    if (window.location.hash && window.location.hash == "#blog") {
        $(".panel-cover").addClass("panel-cover--collapsed");
    }
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
        $(".cover-clear").addClass("panel-cover--overlay");
        $('.panel-cover').removeClass('cnm');
        $('.panel-cover').addClass('cnmb');
        $(".main-post-list").removeClass("hidden");}