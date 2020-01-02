$(document).ready(function(){
    $("nav#nav a").mouseenter(function() {
            if($("div#subMenu").css("display") != "block"){
                $("div#subMenu").slideDown();
                $("ul#sub").slideDown();
            }
    });
                $("div#menu").mouseleave(function() {
                    $("div#subMenu").hide();
                    $("ul#sub").hide();
           });
    });
$(document).ready(function($) {
var a=0;
$("#menubox").click(function() {
    if(a==0){
        $("#nav").slideDown("slow", function(){
            a=1;
        });
    }else if(a==1){
        $("#nav").slideUp("slow", function(){                   
            a=0;
        });
    }
});
});

$( window ).resize(function() {
    var windowWidth = $( window ).width();
 if(windowWidth>601){
    $("#nav").show();
    $("#menuicon label span::nth-child(1)").css("top", 0);
    $("#menuicon label span::nth-child(1)").css("top", "50%");
    $("#menuicon label span::nth-child(1)").css("translateY", "-50%");
    $("#menuicon label span::nth-child(1)").css("top", 0);
 }else if(windowWidth<600){
    $("#nav").hide();
 }
});         
