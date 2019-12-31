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
$(document).ready(function($) {
$( window ).resize(function() {
    var windowWidth = $( window ).width();
if(windowWidth>601){
   $("nav").css("visibility", "visibility");
    $("nav").css("display", "block");
}
});         
});