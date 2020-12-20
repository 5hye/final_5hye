$(document).ready(function(){
    
    $(".make-10").on("click", function() {
        DrawCircle(); })
     $(".make-20").on("click", function() {
        DrawCircle(); })
    $(".make-30").on("click", function() {
            DrawCircle(); })
    $(".make-40").on("click", function() {
                DrawCircle(); })
    

})



function DrawCircle(){


    for (var i = 0; i<20; i++) {
      
        var windowWidth = $(window).width() * Math.random()
        var windowHeigtht = $(window).width() * Math.random()
        $(".circle-container").append("<div class='circle varr' style='left:" + windowWidth + "px; top:"+windowHeigtht+ "px;>'></div>")
        }
    
    }
